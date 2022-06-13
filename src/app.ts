import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

// ****************************************************
// ******** The DOM & Type Casting ********

// const anchor = document.querySelector("a")!;
// if (anchor) {
//   // console.log(anchor.href);
// }
// // console.log(anchor.href);

// //const form = document.querySelector('form')!;
// const form = document.querySelector(".new-item-form") as HTMLFormElement;
// // console.log(form.children);

// // **** Inputs ****
// const type = document.querySelector("#type") as HTMLInputElement;
// const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
// const details = document.querySelector("#details") as HTMLInputElement;
// const amount = document.querySelector("#amount") as HTMLInputElement;

// form.addEventListener("submit", (e: Event) => {
//   e.preventDefault();

//   console.log(
//     type.value,
//     tofrom.value,
//     details.value,
//     // amount.value
//     amount.valueAsNumber
//   );
// });

// ****************************************************
// ******** Classes ********

export class InvoiceX {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invOne = new InvoiceX("mario", "work on the mario website", 250);
const invTwo = new InvoiceX("luigi", "work on the luigi website", 300);

let invoicesX: InvoiceX[] = [];
invoicesX.push(invOne);
invoicesX.push(invTwo);

// Impossible:
// invoicesX.push({ "client": "client1", "details": "details1", "amount": 1 });

// Impossible:
// invoicesX.push({ name: 'shaun' });

// console.log("invoicesX:", invoicesX);
// console.log("invOne.format():", invOne.format());

// ****************************************************
// ******** Classes - Public, Private & Readonly ********
// ******** Modules ********
import { InvoiceY } from "./classes/InvoiceY.js";

const invoOne = new InvoiceY("mario Y", "work on the mario website", 250);
const invoTwo = new InvoiceY("luigi Y", "work on the luigi website", 300);

let invoicesY: InvoiceY[] = [];
invoicesY.push(invoOne);
invoicesY.push(invoTwo);

// invoicesY.forEach((inv) => {
//   console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
// });

// ****************************************************
// ******** Interfaces ********
export interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "shaun",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent ", amount);
    return amount;
  },
};

// console.log(me);
// me.speak("hello, world 2");

const greetPerson = (person: IsPerson): void => {
  console.log("hello ", person.name);
};

// greetPerson(me);
//greetPerson({name: 'shaun'});

// ****************************************************
// ******** Interfaces with Classes ********

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// // inputs
// const type = document.querySelector("#type") as HTMLInputElement;
// const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
// const details = document.querySelector("#details") as HTMLInputElement;
// const amount = document.querySelector("#amount") as HTMLInputElement;

// form.addEventListener("submit", (e: Event) => {
//   e.preventDefault();

//   let doc: HasFormatter;
//   if (type.value === "invoice") {
//     doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
//   } else {
//     doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
//   }
//   console.log(doc);
// });

// ****************************************************
// ******** Rendering an HTML Template ********

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});

// ****************************************************
// ******** GENERICS ********

// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 40 });
//let docTwo = addUID('shaun');

// console.log(docOne.name);

// with interfaces
interface ResourceOne<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: ResourceOne<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "shaun" },
};

const docFour: ResourceOne<string[]> = {
  uid: 1,
  resourceName: "shoppingList",
  data: ["bread", "milk"],
};

// console.log(docThree, docFour);

// ****************************************************
// ******** Enums ********

enum resouceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface ResourceTwo<T> {
  uid: number;
  resouceType: resouceType;
  data: T;
}

const docFive: ResourceTwo<object> = {
  uid: 5,
  resouceType: resouceType.BOOK,
  data: { title: "name of the wind" },
};

const docSix: ResourceTwo<object> = {
  uid: 6,
  resouceType: resouceType.PERSON,
  data: { name: "yoshi" },
};


console.log("docFive:", docFive);
console.log("docSix:", docSix);
