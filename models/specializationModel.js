const mongoose = require("mongoose");

const specializationSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  doctors: [mongoose.Schema.ObjectId],
  name: String,
});

const Specialization = mongoose.model("Specialization", specializationSchema);

module.exports = Specialization;
