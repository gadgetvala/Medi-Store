import React from "react";
import Header from "components/header/Header";
import Card from "components/card/Card";
import "./styles.css";

const PatientScreen = () => {
  return (
    <div>
      <Header name="Suraj" />
      <div className="patientScreen">
        <div className="patientScreen_data">
          <h2>Patient Data</h2>
          <div>
            <Card>
              <p className="card_detailsCard--header">Patient Details</p>
              <p>
                <span className="card_detailsCard--key">Name:</span> Suraj
              </p>
              <p>
                <span className="card_detailsCard--key">DOB:</span> 29 Feb 2000
              </p>
              <p>
                <span className="card_detailsCard--key">ID:</span>
                0x514c05A9869398e0C9ceE93D392164e2BF301569
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
                <span className="card_detailsCard--key">10</span>
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
