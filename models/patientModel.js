const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  dateOfBirth: Date,
  IINnumber: String,
  IDnumber: String,
  first_name: String,
  last_name: String,
  bloodGroup: String,
  emergencyContactNumber: String,
  contactNumber: String,
  email: String,
  address: String,
  maritalStatus: String,
  registrationDate: {
    type: Date,
    default: Date.now(),
  },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
