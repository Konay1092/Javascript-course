//  Two Prototype
// Object.prototype
//CurrentObject.prototype

function Person(name, age) {
  this.name = name;
  this.age = age;
}
//Prototype
Person.prototype.getPro = function () {
  return `${this.name} is now  ${this.age}`;
};

let person1 = new Person("Maung Maung", 21);
console.log(person1.getPro());

// ******************************************************************************

//Prototype Inheritence
function Car(name, speed) {
  this.name = name;
  this.speed = speed;
}
Car.prototype.getP = function () {
  return `${this.name} car  is driving at ${this.speed}`;
};

function Toayota(name, speed) {
  Car.call(this, name, speed); //Prototype call first
}
Toayota.prototype = Object.create(Car.prototype); //Prototype inheritence

//Prototype overwrite
Toayota.prototype.getP = function () {
  return `We are overwrite Carprototype .Sorry!`;
};

function BMW(name, speed) {
  Car.call(this, name, speed); //Call first
}
BMW.prototype = Object.create(Car.prototype); //inheritence

let toyota = new Toayota("Toyota", 120);
let Bmw = new BMW("BMw", 150);

console.log(toyota.getP());
console.log(Bmw.getP());
