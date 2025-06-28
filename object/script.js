const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isMarried: false,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  hobbies: ["reading", "hiking", "coding"],
  favoriteFood: "pizza",
  favoriteDrink: "coffee",
  favoriteColor: "blue",
  favoriteMusic: "rock",
};

const person2 = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  isMarried: true,
  address: {
    street: "456 Elm St",
    city: "Othertown",
    state: "NY",
    zip: "67890",
  },
  hobbies: ["swimming", "dancing", "singing"],
  favoriteFood: "sushi",
  favoriteDrink: "tea",
  favoriteColor: "green",
};

person1.age = 100;
delete person1.firstName 


// console.log(person1);

let person3 = { };
person3.firstName = "Bob";
person3.lastName = "Smith";
person3.age = 40;

// console.log(person3)

let person4 = new Object();
person4["firstName"] = "Alice";

console.log(person4)