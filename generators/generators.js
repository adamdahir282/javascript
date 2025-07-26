// 
function* listNames() {
    yield "John";
    yield "Mary";
    yield "David";
    yield "Emily";
    yield "Michael";
}

const generator = listNames();

console.log(generator.next().value); // John
console.log(generator.next().value); // Mary
console.log(generator.next().value); // David
console.log(generator.next().value); // Emily
console.log(generator.next().value); // Michael
console.log(generator.next().done); // true