const Patient = require("../models/patientModel");
const Doctor = require("../models/doctorModel");
const Specialization = require("../models/specializationModel");
const Appointment = require("../models/appointmentModel");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.getAppointments = catchAsync(async (req, res, next) => {
  const appointments = await Appointment.find({}).populate("doctor");
  res.status(200).json({
    status: "success",
    data: {
      data: appointments,
    },
  });
});

exports.getSpecializations = catchAsync(async (req, res, next) => {
  const specializations = await Specialization.find({});
  res.status(200).json({
    status: "success",
    data: {
      data: specializations,
    },
  });
});

exports.makeAppointment = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      data: appointment,
    },
  });
});
