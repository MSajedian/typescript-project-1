// ****************************************************
// ******** The DOM & Type Casting ********
const anchor = document.querySelector("a");
if (anchor) {
    // console.log(anchor.href);
}
// console.log(anchor.href);
//const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// **** Inputs ****
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, 
    // amount.value
    amount.valueAsNumber);
});
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
console.log("invoicesX:", invoicesX);
console.log("invOne.format():", invOne.format());
// ****************************************************
// ******** Classes - Public, Private & Readonly ********
// ******** Modules ********
import { InvoiceY } from "./classes/InvoiceY.js";
const invoOne = new InvoiceY("mario Y", "work on the mario website", 250);
const invoTwo = new InvoiceY("luigi Y", "work on the luigi website", 300);
let invoicesY = [];
invoicesY.push(invoOne);
invoicesY.push(invoTwo);
invoicesY.forEach((inv) => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
