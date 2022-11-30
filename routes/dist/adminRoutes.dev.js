"use strict";

var express = require("express");

var adminController = require("../controller/adminController");

var router = express.Router(); // router.post("/signup", authController.signup);
// router.post("/login", authController.login);
// router.post("/make-appointment", userController.makeAppointment);

router.route("/doctors").get(adminController.getDoctors).post(adminController.createDoctor);
router.route("/doctor/:id").get(adminController.getDoctor).patch(adminController.updateDoctor)["delete"](adminController.deleteDoctor);
router.route("/patients").get(adminController.getPatients).post(adminController.createPatient);
router.route("/patients/:id").get(adminController.getPatient).patch(adminController.updatePatient)["delete"](adminController.deletePatient);
router.route("/appointments").get(adminController.getAppointments).post(adminController.createAppointment);
router.route("/appointments/:id").get(adminController.getAppointment)["delete"](adminController.deleteAppointment);
router.route("/specializations").get(adminController.getSpecializations).post(adminController.createSpecialization);
router.route("/specializations/:id").get(adminController.getSpecialization);
module.exports = router;