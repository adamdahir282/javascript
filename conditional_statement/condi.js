// if statement

let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}

// if -else statement

let isRaining = true;

if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("Enjoy the sunshine.");
}

// if -else if -else statement

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// switch statement

let day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Wednesday":
    console.log("Midweek");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Just another day");
}

// for || operator
let month = "january";

if (month === "january" || month === "febraury") {
  console.log("It’s the winter time!");
} else {
  console.log("It’s a cold months.");
}

// for ! operator
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in first.");
}
