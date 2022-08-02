//Array is mutable
//isArray(),indexOf()//value,splice(index,count)->remove,concact(,),reverse()
//adding value(push,unshift)
//remove value(pop,shift)
let ary = ["Maung Muang", "KO KO", "Maung Mya", 2];
let txt = "My name is Nay oo  Lwin.";

let bol = Array.isArray(ary);
console.log(bol);

let find = ary.indexOf("Maung Maung");
let find2 = txt.indexOf("g O", 3);

console.log(find2);
let ary1 = [1, 2, 3, 4, 5];
ary1.push(6);
console.log(ary1);

ary1.unshift(10);
console.log(ary1);

ary1.pop();
console.log(ary1);

ary1.shift();
console.log(ary1);

// ary1.splice(1, 3);
// console.log(ary1);

let ary2 = [1, 2, 3, 4, 5, 6];
let ary3 = [7, 8, 9, 10, 11];
let ary4 = ary2.concat(ary3);
console.log(ary4);

let ary6 = [0, 1, 2, 3, 4, 5, 6];
let ary7 = ary6.reverse();
console.log(ary7.reverse());

//for of loop
const fruits = ["Apple", "orange", "Cherry"];
for (let dd of fruits) {
  console.log(dd);
}
