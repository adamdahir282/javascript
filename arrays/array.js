// let name1 = "John";
// let name2 = "Jane";
// let name3 = "Bob";
// let name4 = "Alice";
// let name5 = "Charlie";
// console.log(name1);
// console.log(name5);

let names = ["John", "Jane", "Bob", "Alice", "Charlie", "David", "Emily", "Frank", "Grace", "Henry"];
names[2] = "David";
names[3] = "hafsa";
names[5] = "sara";
names.push("adam")
names.unshift("ali")
names.pop()
names.shift()
names.splice(2, 0, "sara")
names
  .splice(2, 2, "sara")

names.forEach((x) => console.log(x + " is nice")); 
let double = [1, 2, 3].map((x) => x * 2);






