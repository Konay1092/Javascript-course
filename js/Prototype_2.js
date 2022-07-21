//Prototype Other way
//Way 1
//Way2

const carproto = {
  getSpeed: function () {
    return this.speed;
  },
  getName: function () {
    return this.name;
  },
};

//Way1
let car = Object.create(carproto);
car.speed = 190;
car.name = "Suzuki";
console.log(car.getName(), car.getSpeed()); //Suzuki 190

//Way2
let car2 = Object.create(carproto, {
  speed: { value: 2000 },
  name: { value: "Toyata" },
});

console.log(car2.getName(), car2.getSpeed());
