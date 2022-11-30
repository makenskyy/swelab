const Patient = require("../models/patientModel");
const Doctor = require("../models/doctorModel");
const Specialization = require("../models/specializationModel");
const Appointment = require("../models/appointmentModel");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.getDoctors = catchAsync(async (req, res, next) => {
  const doctors = await Doctor.find({});
  res.status(200).json({
    status: "success",
    data: doctors,
  });
});

exports.createDoctor = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.create(req.body);

  const specialization = await Specialization.findById(req.body.specialization);
  console.log(specialization);
  if (specialization) {
    specialization.doctors.push(doctor._id);
    await Specialization.findByIdAndUpdate(req.body.specialization, specialization, { new: true });
  }

  res.status(201).json({
    status: "success",
    data: doctor,
  });
});

exports.updateDoctor = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!doctor) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: doctor,
  });
});

exports.deleteDoctor = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findByIdAndDelete(req.params.id);
  if (!doctor) {
    return next(new AppError("No document found with that ID", 404));
  }

  for (appointment of doctor.appointments) {
    if (appointment._id) await Appointment.findByIdAndDelete(appointment._id);
  }

  const specialization = await Specialization.findById(doctor.specialization);
  specialization.doctors.filter((doctorID) => doctorID != doctor.specialization);

  await Specialization.findByIdAndUpdate(doctor.specialization, specialization, { new: true });

  res.status(201).json({
    status: "success",
    data: null,
  });
});

exports.getDoctor = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: doctor,
  });
});

// -------------------------------------
// Patients
// ------------------------------------

exports.getPatients = catchAsync(async (req, res, next) => {
  const patients = await Patient.find({});
  res.status(200).json({
    status: "success",
    data: patients,
  });
});

exports.getPatient = catchAsync(async (req, res, next) => {
  const patients = await Patient.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: patients,
  });
});

exports.createPatient = catchAsync(async (req, res, next) => {
  const patient = await Patient.create(req.body);
  res.status(201).json({
    status: "success",
    data: patient,
  });
});

exports.updatePatient = catchAsync(async (req, res, next) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!patient) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: patient,
  });
});

exports.deletePatient = catchAsync(async (req, res, next) => {
  const patient = await Patient.findByIdAndDelete(req.params.id);
  if (!patient) {
    return next(new AppError("No document found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});

// --------------------------------------------
// Appointment
// --------------------------------------------

exports.getAppointments = catchAsync(async (req, res, next) => {
  const appointments = await Appointment.find({}).populate("doctor");
  res.status(200).json({
    status: "success",
    data: {
      appointments,
    },
  });
});

exports.getAppointment = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.find(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      appointment,
    },
  });
});

exports.acceptAppointment = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.find(req.params.id);
  appointment.approved = true;
  await Appointment.findByIdAndUpdate(req.params.id, appointment, { new: true });
  res.status(201).json({
    status: "success",
    data: appointment,
  });
});

exports.createAppointment = catchAsync(async (req, res, next) => {
  req.body.approved = true;
  const appointment = await Appointment.create(req.body);
  const doctor = await Doctor.findById(req.body.doctor);
  if (doctor) {
    doctor.appointments.push(appointment._id);
    await Doctor.findByIdAndUpdate(req.body.doctor, doctor, { new: true });
  }
  res.status(201).json({
    status: "success",
    data: {
      data: appointment,
    },
  });
});

exports.updateAppointment = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!appointment) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: appointment,
    },
  });
});

exports.deleteAppointment = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.findByIdAndDelete(req.params.id);
  if (!appointment) {
    return next(new AppError("No document found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});

// Specialization
exports.createSpecialization = catchAsync(async (req, res, next) => {
  const specialization = await Specialization.create(req.body);
  res.status(200).json({
    status: "success",
    data: specialization,
  });
});

exports.getSpecializations = catchAsync(async (req, res, next) => {
  const specializations = await Specialization.find({});
  res.status(200).json({
    status: "success",
    data: specializations,
  });
});

exports.getSpecialization = catchAsync(async (req, res, next) => {
  const specialization = await Specialization.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: specialization,
  });
});
