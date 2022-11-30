import Navbar from "./Navbar";
// import Home from "./pages/Home";
import MakeAppointment from "./pages/MakeAppointmentComponent/MakeAppointment";

import Home from "./pages/HomeComponent/Home";
import Doctors from "./pages/DoctorComponent/Doctors";
import Specialization from "./pages/SpecializationComponent/Specialization";
import Appointment from "./pages/AppointmentComponent/Appointment";
import Patients from "./pages/PatientComponent/Patients";
import Login from "./pages/LoginComponent/Login";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/make-appointment" element={<MakeAppointment />} />
        <Route path="/admin/specializations/:id" element={<Specialization />} />
        <Route path="/admin/appointments" element={<Appointment />} />
        <Route path="/admin/doctors" element={<Doctors />} />
        <Route path="/admin/patients" element={<Patients />} />
        <Route path="/admin" element={<Doctors />} />
        <Route path="/patients" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
