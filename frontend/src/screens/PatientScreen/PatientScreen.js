import React, { useContext } from "react";
import Header from "components/header/Header";
import Card from "components/card/Card";
import { AppContext } from "context/AppContext";
import "./styles.css";

const PatientScreen = () => {
  const { user } = useContext(AppContext);

  console.log(user);
  return (
    <div>
      <Header name={user.name} />
      <div className="patientScreen">
        <div className="patientScreen_data">
          <h2>Patient Data</h2>
          <div>
            <Card>
              <p className="card_detailsCard--header">Patient Details</p>
              <p>
                <span className="card_detailsCard--key">Name:</span> {user.name}
              </p>
              <p>
                <span className="card_detailsCard--key">DOB:</span> {user.dob}
              </p>
              <p>
                <span className="card_detailsCard--key">ID:</span>
                {user.id}
              </p>
              <p>
                <span className="card_detailsCard--key">Address:</span>
                {user.userAddress}
              </p>
            </Card>
          </div>
        </div>

        <div className="patientScreen_data">
          <h2>Records</h2>
          <div>
            <Card>
              <p className="card_detailsCard--header">Total Upload Records</p>
              <p>
                <span className="card_detailsCard--key">{user.dataSize}</span>
              </p>
            </Card>
            <Card>
              <p className="card_detailsCard--header">Add New Records</p>
            </Card>
            <Card>
              <p className="card_detailsCard--header">View All Records</p>
            </Card>
          </div>
        </div>

        <div className="patientScreen_data">
          <h2>Doctor</h2>
          <div>
            <Card>
              <p className="card_detailsCard--header">Total Added Doctors</p>
              <p>
                <span className="card_detailsCard--key">10</span>
              </p>
            </Card>
            <Card>
              <p className="card_detailsCard--header">Add new Doctor</p>
            </Card>
            <Card>
              <p className="card_detailsCard--header">View All Doctor</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientScreen;
