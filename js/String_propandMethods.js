//String is a scequence of character
//Concatination(+),append(+=),escaping(\),length(),toUpperCase(),toLowerCase(),indexOf('char'),lastIndexOf(),charAt()
//substring,slice,split,replace(),includes()

let str = "I am Nay Oo Lwin.";
let str2 = "Welcome To You";
let concat = str + str2;
console.log(concat);

str += "What is your name?";

console.log(str);

let str3 = 'I can"t wait .';
console.log(str3);

let str5 = "My name is Nay Oo Lwin 'Ko Nay'";
console.log(str5.length);

let str6 = "My name is Ko Nay.";
let str7 = str.concat("&&", str6);
console.log(str7);
console.log(str6.toLocaleUpperCase());
console.log(str6.toLowerCase());

console.log(str6.indexOf("Nay"));
console.log(str6.lastIndexOf("o"));
console.log(str6.charAt(5));
console.log(str6.length - 1);

let str8 = str6.substring("n", 8);
console.log(str8);

let str10 = str6.slice(8);
console.log(str10);
