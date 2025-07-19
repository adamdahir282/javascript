let doctor = {
  name: "Dr. Smith",
  specialty: "Cardiology",
  yearsOfExperience: 10,
  patients: ["John", "Jane", "Bob"],
  schedule: {
    monday: ["9:00 AM", "10:00 AM"],
    tuesday: ["11:00 AM", "12:00 PM"],
  },
  treatPatient: function (patient) {
    console.log(`${this.name} is treating ${patient}`);
  },
  addPatient: function (patient) {
    this.patients.push(patient);
    console.log(`${this.name} has added ${patient} to their patient list`);
  },
};

console.log(doctor.name)
doctor.treatPatient("abdi")
