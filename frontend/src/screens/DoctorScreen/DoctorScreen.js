// Global Imports
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Functionality Imports
import { AppContext } from "context/AppContext";
// Components Imports
import Card from "components/card/Card";
import Header from "components/header/Header";
import { Col, Row } from "reactstrap";
// Styles Imports
import "./styles.css";

/**
 * Doctor Screen Component
 */
const DoctorScreen = () => {
  const { user } = useContext(AppContext);

  return (
    <div>
      <Header name={user.name} />
      <div className="patientScreen">
        <div className="patientScreen_data">
          <h2>Doctor Data</h2>
          <div>
            <Card>
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
          <h2>Patient</h2>
          <Row>
            <Col>
              <Card>
                <p className="card_detailsCard--header">Total Patient Access</p>
                <p>
                  <span className="card_detailsCard--key">
                    {user.totalPatient}
                  </span>
                </p>
              </Card>
            </Col>
            <Col>
              <Link to="/doctor/patients">
                <Card>
                  <p className="card_detailsCard--header">View All Patient</p>
                </Card>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DoctorScreen;
