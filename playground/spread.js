// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// // One way to do it (No Spread Operator)
// console.log(add(toAdd[0],toAdd[1]));
//
// // Another way using the Spread Operator
// console.log(add(...toAdd));
//
// // Second Example
// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

//******************************
// Challenges
//******************************
var person = ['Vinny', 25];
var personTwo = ['Jen', 24];
// Hi Vinny, you are 25
function greet(name, age) {
    console.log('Hi ' + name + ', your are ' + age);
}
greet(...person);
greet(...personTwo);

//******************************
var names = ['Mike', 'Ben'];
var final = ['Vinny', ...names];
// Hi Vinny
function greeting () {
    final.map((name) => {
    console.log('Hi ' + name);
    });
}
greeting();
//******************************
