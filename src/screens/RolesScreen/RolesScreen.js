import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const RolesScreen = () => {
  return (
    <div className="rolesScreen">
      <Link to="/doctor">Doctor</Link>
      <Link to="/patient">Patient</Link>
    </div>
  );
};

export default RolesScreen;
