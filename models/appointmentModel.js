const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: "Doctor",
    required: [true, "Appointment must belong to a doctor"],
  },
  time: {
    type: Date,
  },
  approved: {
    type: Boolean,
    default: false,
  },
  patientContact: {
    type: String,
  },
  patientName: {
    type: String,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
