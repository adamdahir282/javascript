const showGifts = (bag) => console.log(bag);

// Mum gives a phone
async function getPhoneFromMum() {
  var mumsPhone = {
    make: "Samsung",
    model: "Note",
    color: "black",
  };
  return mumsPhone;
}

// Dad gives a phone cover and adds everything to a bag
async function getPhoneCoverFromDad(phone) {
  var bag = [];
  var phoneCover = { color: "white" };
  bag.push(phone);
  bag.push(phoneCover);
  return bag;
}

// Sister gives a SIM card and adds it to the bag
async function getPhoneSimFromSister(bag) {
  var sim = {
    network: "Vodafone",
    number: "07947755623",
  };
  bag.push(sim);
  showGifts(bag);
}

// Ask for the phone process
async function askForPhone() {
  const phone = await getPhoneFromMum();
  const bag = await getPhoneCoverFromDad(phone);
  await getPhoneSimFromSister(bag);
}

askForPhone();
