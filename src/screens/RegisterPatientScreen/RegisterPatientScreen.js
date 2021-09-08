import React from "react";
import "./styles.css";

const RegisterPatientScreen = () => {
  return (
    <div className="registerPatientScreen">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="DOB" />
      <input type="text" placeholder="Address" />
      <button>Register</button>
    </div>
  );
};

export default RegisterPatientScreen;
