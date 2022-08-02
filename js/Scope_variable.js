//Three variable
//let=local variable(block variable)
//var=global variable
//const

//let(block)

for (let i = 0; i < 12; i++) {
  console.log("Inside block quote" + i);
}
// console.log("Outside block quote" + i); //error i is not definied

//var (global)
var a;
for (a = 0; a < 10; a++) {
  console.log("Inside block quote" + a);
}
console.log("outside the block quote var " + a);
//let vs var

var num = 20;
let count = 12;

console.log(count);
console.log(num);

//var and let are same in function
//let is work in block
//var is work in global

var num4 = 20;
let count4 = 10;
console.log(num4); //20

var num4 = 34;
console.log(num4); //34

// let count4 = 31;
// console.log(count4); //error

//var are redeclearable
//let are not redeclerable
