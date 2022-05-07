// TypeScript for JavaScript Programmers
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// JavaScript types
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#javascript_types
// typeof()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// ******** String ********
var character = "mario";
character = "luigi";
// impossible:
// character = 20;
// ******** Number ********
var age = 30;
age = 40;
// impossible:
// age = 'yoshi';
// ******** Boolean ********
var isBlackBelt = false;
isBlackBelt = true;
// impossible:
// isBlackBelt = 'yes';
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
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// ******** Object ********
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// impossible:
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
// impossible:
// ninja = {
//   name: 'yoshi',
//   belt: 'orange',
// };
