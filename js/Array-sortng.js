let numbers = [12, 14, 50, 80, 11, 15, 24, 6, 1, 2];
console.log(numbers);

//.sort()

console.log(numbers.sort());

let num = [1, 12, 5, 4, 22, 14];
let num1 = num.sort((x, y) => y - x);

console.log(num1);
let num2 = num.sort((x, y) => x - y);
console.log(num2);

//.find()
function under13(num) {
  return num < 13;
}
let find = numbers.find(under13);
console.log(find); //1
