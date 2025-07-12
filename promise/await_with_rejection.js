// Creating Promise with possible rejection
async function getPhonePromise() {
  let isMomHappy = false; // Change to true to resolve

  if (isMomHappy) {
    return {
      brand: 'Samsung',
      color: 'black'
    };
  } else {
    throw new Error('Mom is not happy');
  }
}

// Consuming Promise using then() and catch()
getPhonePromise()
  .then(phone => {
    console.log('Using .then:', phone);
  })
  .catch(error => {
    console.log('Using .then error:', error.message);
  });

// Consuming Promise using async/await with try...catch
async function consumePhonePromise() {
  try {
    let phone = await getPhonePromise();
    console.log('Using await:', phone);
  } catch (error) {
    console.log('Using await error:', error.message);
  }
}

consumePhonePromise();
