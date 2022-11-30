const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const adminController = require("../controller/adminController");

router.get("/specializations", userController.getSpecializations);
router.get("/appointments", userController.getAppointments);
// userController.makeAppointment немного неправильно жасалган, а так у них логика одинаковая почти (у админа просто по дефолту approved = true, а у юзера это false), из-за этого использовал админскую
router.post("/make-appointment", adminController.createAppointment);

module.exports = router;
