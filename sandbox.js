// TypeScript for JavaScript Programmers
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// JavaScript types
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#javascript_types
// typeof()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// ******** String ********
var characterOne = "mario";
characterOne = "luigi";
// impossible:
// characterOne = 20;
// ******** Number ********
var ageOne = 30;
ageOne = 40;
// impossible:
// ageOne = 'yoshi';
// ******** Boolean ********
var isBlackBelt = false;
isBlackBelt = true;
// impossible:
// isBlackBelt = 'yes';
// ****************************************************
// ******** Function ********
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circ('hello'));
console.log(circ(7.5));
// ******** Array ********
var names = ["luigi", "mario", "yoshi"];
names.push("toad");
// impossible:
// names.push(3);
// names[1] = 3;
var numbers = [10, 20, 30, 40];
numbers.push(3);
// numbers.push("toad");
// numbers[1] = 3;
var mixedOne = ["ken", 4, "chun-li", 8, 9];
mixedOne.push("ryu");
mixedOne.push(10);
mixedOne[0] = 3;
// ******** Object ********
var ninjaOne = {
    name: "mario",
    belt: "black",
    age: 30
};
ninjaOne.age = 40;
ninjaOne.name = "ryu";
// impossible:
// ninjaOne.age = '30';
// ninjaOne.skills = ['fighting', 'sneaking']
ninjaOne = {
    name: "yoshi",
    belt: "orange",
    age: 40
};
// impossible:
// ninjaOne = {
//   name: 'yoshi',
//   belt: 'orange',
// };
// ****************************************************
// **************** Explicit Types ****************
var characterTwo = "mario";
var ageTwo;
var isLoggedIn;
ageTwo = 30;
// impossible:
// age = 'luigi';
isLoggedIn = true;
// impossible:
// isLoggedIn = 25;
// ******** Arrays ********
var ninjasOne = [];
ninjasOne.push("ryu");
ninjasOne.push("chun-li");
console.log(ninjasOne);
// impossible:
// ninjasOne = [10, 23];
// impossible: (not initilised with empty array)
// let ninjas2: string[];
// ninjas2.push("ryu");
// ******** Union Types ********
var mixedTwo = [];
mixedTwo.push("hello");
mixedTwo.push(false);
mixedTwo.push(20);
console.log(mixedTwo);
var uid;
// ******** Objects ********
var ninjaTwo;
ninjaTwo = { name: "yoshi", age: 30 };
var ninjaThree;
ninjaThree = { name: "ken", age: 20, beltColour: "black" };
// ****************************************************
// ******** Any ********
var age = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);
var mixed = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);
var ninja;
ninja = { name: 'yoshi', age: 25 };
console.log(ninja);
ninja = { name: 25, age: 'yoshi' };
console.log(ninja);
// ****************************************************
