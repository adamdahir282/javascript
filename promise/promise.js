let isMomHappy = false;

// Creating the Promise
const newPhonePromise = new Promise((resolve, reject) => {
  // fat arrow
  if (isMomHappy) {
    let phone = {
      brand: "Samsung",
      color: "black",
    };
    resolve(phone);
  } else {
    let reason = new Error("mom is not happy");
    reject(reason);
  }
});

// Consuming the Promise
let askMom = function () {
  newPhonePromise
    .then((fulfilled) => console.log(fulfilled))
    .catch((error) => console.log(error.message));
};

askMom();
