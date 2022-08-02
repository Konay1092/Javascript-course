//getDate(),getDay(),getMonth(),getFullYear(),getTime(),getHours(),getMinutes(),getSeconds(),GetMilliSeconds(),getUTCFullYear(),

//setDate(),setDay(),setMonth(),setFullYear(),setTime(),setHours(),setMinutes(),setSeconds(),setMilliseconds()
let date = new Date();
console.log(date.getDate());
let day = date.getDay();
let nameOfday;
let quote;
switch (day) {
  case 0:
    nameOfday = "Sunday";
    quote = "Time to Chill";
    break;
  case 1:
    nameOfday = "Monday";
    quote = "Monday Morning Blues!";
    break;
  case 2:
    nameOfday = "Tuesday";
    quote = "Taco Time";
    break;
  case 3:
    nameOfday = "Wednesday";
    quote = "Two more days to the weekend";
    break;
  case 4:
    nameOfday = "Thursday";
    quote = "The weekend is almost here";
    break;
  case 5:
    nameOfday = "Friday";
    quote = "Weekend is here";
    break;
  default:
    nameOfday = "Saturaday";
    quote = "Time to party!!!!";
    break;
}
console.log(`Today is ${nameOfday} and ${quote}`);

//getFullYear()
console.log(date.getFullYear());
//getUTCFullYear()
console.log(date.getUTCFullYear());
//getMonth()
console.log(date.getMonth());
//getTime()
console.log(date.getTime());
//getHours()
console.log(date.getHours());
//getMinutes()
console.log(date.getMinutes());
//getSeconds()
console.log(date.getSeconds());
//getUTCFUllYear()
console.log(date.getUTCFullYear());
console.log(date.getMilliseconds());

//setMethod()

let setdate = new Date();
console.log(setdate.setDate("2022"));
console.log(setdate.setFullYear("2022/9/12"));
