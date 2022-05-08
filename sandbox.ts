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
const circ = (diameter: number) => {
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

let characterTwo: string = "mario";
let ageTwo: number;
let isLoggedIn: boolean;

ageTwo = 30;
// impossible:
// age = 'luigi';

isLoggedIn = true;
// impossible:
// isLoggedIn = 25;

// ******** Arrays ********
let ninjasOne: string[] = [];

ninjasOne.push("ryu");
ninjasOne.push("chun-li");
console.log(ninjasOne);
// impossible:
// ninjasOne = [10, 23];

// impossible: (not initilised with empty array)
// let ninjas2: string[];
// ninjas2.push("ryu");

// ******** Union Types ********
let mixedTwo: (string | number | boolean)[] = [];
mixedTwo.push("hello");
mixedTwo.push(false);
mixedTwo.push(20);
console.log(mixedTwo);

let uid: string | number;

// ******** Objects ********
let ninjaTwo: object;
ninjaTwo = { name: "yoshi", age: 30 };

let ninjaThree: {
  name: string;
  age: number;
  beltColour: string;
};
ninjaThree = { name: "ken", age: 20, beltColour: "black" };
// ****************************************************