import React from "react";

const Login = () => {
  const forwardToThePatientPage = () => {
    window.location.replace("http://localhost:3000/patients");
  };

  const forwardToTheAdminPage = () => {
    window.location.replace("http://localhost:3000/admin");
  };

  return (
    <div style={{ backgroundColor: "#EDEFF0", height: "100vh", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <button style={{ padding: "30px 40px", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={forwardToThePatientPage}>
          Patients' pages
        </button>
      </div>
      <div>
        <h1 style={{ fontSize: "50px" }}>Welcome to the page</h1>
      </div>
      <div>
        <button style={{ padding: "30px 40px", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={forwardToTheAdminPage}>
          Admin's pages
        </button>
      </div>
    </div>
  );
};

export default Login;
