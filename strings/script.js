//different ways to create strings

let firstName = "John J"; // using double quotes
let lastName = "Doe"; // using single quotes
let age = 30;
let isMarried = false;
let city = new String("New York"); // using the String constructor
let country = `USA`; // using template literals back ticks
//console.log(firstName,lastName,city.toString(),country);

// how to access strings

// console.log(firstName.indexOf("J"));
// console.log(firstName.indexOf("n"));
// console.log(firstName.lastIndexOf("J"));

// string methods
let str = "Hello, world! ";
console.log(str.length);

let streatName = "main highway";
console.log(streatName.toUpperCase());

let streatName2 = "maiin highway";
console.log(streatName2.toLowerCase());

let streatName3 = "maiin highway";
console.log(streatName3.trim());

let streatName4 = "maiin highway";
console.log(streatName4.trimStart());

let streatName5 = "maiin highway";
console.log(streatName5.trimEnd());

let countryName = "united states of america";
console.log(str.split(","));

// console.log(str.split(" "));
//console.log(str.replace("World", "Earth"));
//console.log(str.includes("world"));
//console.log(str.startsWith("Hello"));
//console.log(str.endsWith("!"));

let rep = "Hello, world! ";
console.log(str.repeat(3));
//console.log(str.padStart(20, "i live in london and outside london "));
// console.log(str.padEnd(20,"World "));
// console.log(str.charAt(0));

//let nameString = "adam dahir";
//console.log(nameString.charCodeAt(0));

// console.log(str.slice(0,5));

let sub = "welcome home";
console.log(sub.substring(0, 5));

let str1 = "how are you";
console.log(str1.split("").reverse().join(""));

// if (str.includes("World")) {
//     console.log("this string  has the word world in it!");
// } else {
//     console.log("it does not have the word world in it!");
//     }
