import { useState } from "react";
import "./makeAppointment.css";
import FormInput from "../../utils/FormInput";
import Navbar from "../../Navbar";
import React from "react";
import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

export default function MakeAppointment() {
  const [values, setValues] = useState({
    doctor: "",
    time: "",
    patientContact: "",
    patientName: "",
    approved: false,
  });

  const inputs = [
    // {
    //   id: 1,
    //   name: "doctor",
    //   type: "select",
    //   placeholder: "Select",
    //   label: "Doctor",
    // },
    {
      id: 2,
      name: "time",
      type: "date",
      placeholder: "Time",
      label: "Time",
    },
    {
      id: 3,
      name: "patientContact",
      type: "text",
      placeholder: "+77759721134",
      label: "Patient contact",
    },
    {
      id: 4,
      name: "patientName",
      type: "text",
      placeholder: "Patient Name",
      label: "Patient name",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    values["doctor"] = selects;
    console.log(values);
    // const navigate = useNavigate();
    axios({
      method: "POST",
      url: "http://localhost:8000/admin/appointments",
      data: values,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        window.location.replace("http://localhost:3000/");
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    const request = async () => {
      const response = await axios.get(`http://localhost:8000/admin/doctors`);
      const promises = [];
      promises.push(response);
      const doctors = await Promise.all(promises);
      setRows(doctors[0].data.data);
    };
    request();
  }, []);

  const [selects, setSelects] = React.useState(rows[0]);

  return (
    <>
      <Navbar />
      <div className="app" style={{ padding: "2rem", backgroundColor: "#EDEFF0", height: "100vh" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form onSubmit={handleSubmit} style={{ padding: "30px 60px" }}>
            <h1>Appointment</h1>
            <select
              style={{ padding: "10px", margin: "0 0 3px 0", borderRadius: "5px", border: "1px solid gray", width: "100%" }}
              key={1}
              value={selects}
              onChange={(e) => setSelects(e.target.value)}
            >
              {rows.map((row) => (
                <option>{row._id}</option>
              ))}
              {/* <option>First</option>
              <option>Second</option>
              <option>Third</option> */}
            </select>
            {inputs.map((input) => (
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}
            <button>Make appointment</button>
          </form>
        </div>
      </div>
    </>
  );
}

// export default MakeAppointment;
