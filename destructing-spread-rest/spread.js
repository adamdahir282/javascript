// // const numbers = [1, 2, 3,8,10,26,1];
// // const copy = [...numbers];

// // console.log(copy);

// const a = [1, 2];
// const b = [3, 4, 5, 20];
// const merged = [...a, ...b];

// console.log(merged);

// //

function multiplyAll(num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
}
let values = [9, 3, 5, 7];
const result = multiplyAll(...values);
console.log(result);
