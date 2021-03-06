"use strict";
// TypeScript for JavaScript Programmers
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// JavaScript types
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#javascript_types
// typeof()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// ******** String ********
let characterOne = "mario";
characterOne = "luigi";
// impossible:
// characterOne = 20;
// ******** Number ********
let ageOne = 30;
ageOne = 40;
// impossible:
// ageOne = 'yoshi';
// ******** Boolean ********
let isBlackBelt = false;
isBlackBelt = true;
// impossible:
// isBlackBelt = 'yes';
// ****************************************************
// ******** Function ********
const circ = (diameter) => {
    return diameter * Math.PI;
};
// console.log(circ('hello'));
console.log(circ(7.5));
// ******** Array ********
let names = ["luigi", "mario", "yoshi"];
names.push("toad");
// impossible:
// names.push(3);
// names[1] = 3;
let numbers = [10, 20, 30, 40];
numbers.push(3);
// numbers.push("toad");
// numbers[1] = 3;
let mixedOne = ["ken", 4, "chun-li", 8, 9];
mixedOne.push("ryu");
mixedOne.push(10);
mixedOne[0] = 3;
// ******** Object ********
let ninjaOne = {
    name: "mario",
    belt: "black",
    age: 30,
};
ninjaOne.age = 40;
ninjaOne.name = "ryu";
// impossible:
// ninjaOne.age = '30';
// ninjaOne.skills = ['fighting', 'sneaking']
ninjaOne = {
    name: "yoshi",
    belt: "orange",
    age: 40,
    // impossible:
    // skills: ['running'],
};
// impossible:
// ninjaOne = {
//   name: 'yoshi',
//   belt: 'orange',
// };
// ****************************************************
// **************** Explicit Types ****************
let characterTwo = "mario";
let ageTwo;
let isLoggedIn;
ageTwo = 30;
// impossible:
// age = 'luigi';
isLoggedIn = true;
// impossible:
// isLoggedIn = 25;
// ******** Arrays ********
let ninjasOne = [];
ninjasOne.push("ryu");
ninjasOne.push("chun-li");
console.log(ninjasOne);
// impossible:
// ninjasOne = [10, 23];
// impossible: (not initilised with empty array)
// let ninjas2: string[];
// ninjas2.push("ryu");
// ******** Union Types ********
let mixedTwo = [];
mixedTwo.push("hello");
mixedTwo.push(false);
mixedTwo.push(20);
console.log(mixedTwo);
let uid;
// ******** Objects ********
let ninjaTwo;
ninjaTwo = { name: "yoshi", age: 30 };
let ninjaThree;
ninjaThree = { name: "ken", age: 20, beltColour: "black" };
// ****************************************************
// ******** Any ********
let age = 25;
age = true;
console.log(age);
age = "hello";
console.log(age);
age = { name: "luigi" };
console.log(age);
let mixed = [];
mixed.push(5);
mixed.push("mario");
mixed.push(false);
console.log(mixed);
let ninja;
ninja = { name: "yoshi", age: 25 };
console.log(ninja);
ninja = { name: 25, age: "yoshi" };
console.log(ninja);
// ****************************************************
console.log("tscongif.json  was created");
// ****************************************************
// ******** Function Basics ********
// let greet: Function
// greet = () => {
//   console.log('hello, again');
// }
let greetOne = () => {
    console.log("hello, world");
};
// impossible:
// greet = 'hello';
// put the optional parameter at the end (as last parameter)
// c is optional parameter
const myFunctionOne = (a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
};
// c is optional parameter
const myFunctionTwo = (a, b, c = 10) => {
    console.log(a);
    console.log(b);
    console.log(c);
};
// Parameter cannot have question mark and initializer
// c?: number | string = 10
const add = (a, b, c = /*?*/ 10) => {
    console.log(a + b);
    console.log(c);
};
// Void functions are created and used just like value-returning functions except they do not return a value after the function executes.
add(5, 10, "ninja");
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
console.log(result);
const logDetailsOne = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetTwo = (user) => {
    console.log(`${user.name} says hello`);
};
// ****************************************************
// ******** Function Signatures ********
// example 1
let greetThree;
greetThree = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetailsTwo;
logDetailsTwo = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
