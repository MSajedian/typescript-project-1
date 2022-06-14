import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
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
    constructor(c, d, a) {
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
let invoicesX = [];
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
let invoicesY = [];
invoicesY.push(invoOne);
invoicesY.push(invoTwo);
const me = {
    name: "shaun",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent ", amount);
        return amount;
    },
};
// console.log(me);
// me.speak("hello, world 2");
const greetPerson = (person) => {
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
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
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
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
const docThree = {
    uid: 1,
    resourceName: "person",
    data: { name: "shaun" },
};
const docFour = {
    uid: 1,
    resourceName: "shoppingList",
    data: ["bread", "milk"],
};
// console.log(docThree, docFour);
// ****************************************************
// ******** Enums ********
var resouceType;
(function (resouceType) {
    resouceType[resouceType["BOOK"] = 0] = "BOOK";
    resouceType[resouceType["AUTHOR"] = 1] = "AUTHOR";
    resouceType[resouceType["FILM"] = 2] = "FILM";
    resouceType[resouceType["DIRECTOR"] = 3] = "DIRECTOR";
    resouceType[resouceType["PERSON"] = 4] = "PERSON";
})(resouceType || (resouceType = {}));
const docFive = {
    uid: 5,
    resouceType: resouceType.BOOK,
    data: { title: "name of the wind" },
};
const docSix = {
    uid: 6,
    resouceType: resouceType.PERSON,
    data: { name: "yoshi" },
};
console.log("docFive:", docFive);
console.log("docSix:", docSix);
// ****************************************************
// ******** Tuples ********
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';
let student;
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];
