const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  dateOfBirth: Date,
  IINnumber: String,
  IDnumber: String,
  first_name: String,
  last_name: String,
  contactNumber: String,
  departmentID: String,
  // sepcialization: {
  //   type: Number,
  //   required: [true, "Doctor must belong to a specialization"],
  // },
  specialization: {
    type: mongoose.Schema.ObjectId,
    ref: "Specialization",
    required: [true, "Doctor must belong to a specialization"],
  },
  appointments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Specialization",
    },
  ],
  experienceYears: String,
  category: String,
  price: String,
  schedule: String,
  education: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  address: String,
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
