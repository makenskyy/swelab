import React from "react";
// import Login from "./pages/Login/Login";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = false;
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
