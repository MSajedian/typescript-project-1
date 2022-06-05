// ****************************************************
// ******** The DOM & Type Casting ********

const anchor = document.querySelector("a")!;
if (anchor) {
  // console.log(anchor.href);
}
// console.log(anchor.href);

//const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// **** Inputs ****
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    // amount.value
    amount.valueAsNumber
  );
});

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

console.log("invoicesX:", invoicesX);
console.log("invOne.format():", invOne.format());

// ****************************************************
// ******** Classes - Public, Private & Readonly ********
// ******** Modules ********
import { InvoiceY } from "./classes/InvoiceY.js";

const invoOne = new InvoiceY("mario Y", "work on the mario website", 250);
const invoTwo = new InvoiceY("luigi Y", "work on the luigi website", 300);

let invoicesY: InvoiceY[] = [];
invoicesY.push(invoOne);
invoicesY.push(invoTwo);

invoicesY.forEach((inv) => {
  console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});

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

console.log(me);
me.speak("hello, world 2");

const greetPerson = (person: IsPerson): void => {
  console.log("hello ", person.name);
};

greetPerson(me);
//greetPerson({name: 'shaun'});
