import React, { useContext, useState } from "react";
import Header from "components/header/Header";
import Card from "components/card/Card";
import { AppContext } from "context/AppContext";
import "./styles.css";
import { Button, Col, FormGroup, Input, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import mediStore from "web3_config/medistore";
import web3 from "web3_config/web3";

const PatientScreen = () => {
  const [newRocord, setNewRocord] = useState(false);
  const [doctorsAddress, setDoctorAddress] = useState("");
  const [newPermission, setNewPermission] = useState(false);
  const { user, setUser, setNotificationTostValue } = useContext(AppContext);

  const handleNewRecord = (name) => () => {};
  const handleNewDoctor = async (event) => {
    try {
      const accounts = await web3.eth.getAccounts();
      await mediStore.methods.giveAccessToDoctor(event.target.value).send({
        from: accounts[0],
      });
      const userData = await mediStore.methods.getUserData().call();
      console.log(userData);
      setUser((previousUser) => ({ ...previousUser, ...userData }));
    } catch (err) {
      setNotificationTostValue(err);
      setUser((previousUser) => ({}));
    }
  };

  return (
    <div>
      <Header name={user.name} />
      <div className="patientScreen">
        <div className="patientScreen_data">
          <h2>Patient Data</h2>
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
          <h2>Records</h2>
          <Row>
            <Col>
              <Card>
                <p className="card_detailsCard--header">Total Upload Records</p>
                <p>
                  <span className="card_detailsCard--key">10</span>
                </p>
              </Card>
            </Col>
            <Col>
              <span
                onClick={() => {
                  setNewRocord(true);
                }}
              >
                <Card>
                  <p className="card_detailsCard--header">Add New Records</p>
                </Card>
              </span>
            </Col>
            <Col>
              <Link to="/patient/record/view">
                <Card>
                  <p className="card_detailsCard--header">View All Records</p>
                </Card>
              </Link>
            </Col>
          </Row>
        </div>
        <div className="patientScreen_data">
          <h2>Records</h2>
          <Row>
            <Col>
              <Card>
                <p className="card_detailsCard--header">Total Added Doctors</p>
                <p>
                  <span className="card_detailsCard--key">10</span>
                </p>
              </Card>
            </Col>
            <Col>
              <span
                onClick={() => {
                  setNewPermission(true);
                }}
              >
                <Card>
                  <p className="card_detailsCard--header">Add New Doctor</p>
                </Card>
              </span>
            </Col>
            <Col>
              <Link to="/patient/doctor/view">
                <Card>
                  <p className="card_detailsCard--header">View All Doctor</p>
                </Card>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
      <Modal
        show={newRocord}
        onHide={() => setNewRocord(false)}
        dialogClassName="my-modal"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Add New Document
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <FormGroup>
                <label className="form-control-label">Name</label>
                <Input
                  onChange={handleNewRecord("name")}
                  id="example3cols1Input"
                  placeholder="e.g.Blood Test"
                  required
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="custom-file">
                <input
                  className="custom-file-input"
                  id="projectCoverUploads"
                  type="file"
                />
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Button block type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <Modal
        show={newPermission}
        onHide={() => setNewPermission(false)}
        dialogClassName="my-modal"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Add New Doctor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <FormGroup>
                <label className="form-control-label">ID</label>
                <Input
                  onChange={(e) => setDoctorAddress(e.target.value)}
                  id="example3cols1Input"
                  placeholder="e.g.ID"
                  required
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button block type="submit" onClick={handleNewDoctor}>
                Submit
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PatientScreen;
