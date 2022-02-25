import React, { useContext, useState, useReducer } from "react";
import Header from "components/header/Header";
import Card from "components/card/Card";
import { AppContext } from "context/AppContext";
import "./styles.css";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import mediStore from "web3_config/medistore";
import web3 from "web3_config/web3";
import CustomModal from "screens/PatientScreen/components/CustomModal";
import ShowToast from "components/notificationToast/ShowToast";

const INITAL_REDUCER_STATE = {
  isActive_addDoctorModal: false,
  isActive_removeDoctorModal: false,
};

const ACTIONS = {
  TOGGLE_ADD_DOCTOR_MODAL: "toggle_AddDoctorModal",
  TOGGLE_REMOVE_DOCTOR_MODAL: "toggle_RemoveDoctorModal",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_ADD_DOCTOR_MODAL:
      return {
        ...state,
        isActive_addDoctorModal: !state.isActive_addDoctorModal,
      };
    case ACTIONS.TOGGLE_REMOVE_DOCTOR_MODAL:
      return {
        ...state,
        isActive_removeDoctorModal: !state.isActive_removeDoctorModal,
      };
    default:
      return state;
  }
};

const PatientScreen = () => {
  const [state, dispatch] = useReducer(reducer, INITAL_REDUCER_STATE);
  const [doctorsAddress, setDoctorAddress] = useState("");
  const { user, setUser } = useContext(AppContext);

  const handleAddNewDoctor = async () => {
    try {
      // Get User Accounts
      const accounts = await web3.eth.getAccounts();

      // Get All The Users of Doctor which user want to give permissions.
      const _allUsersOfDoctor = await mediStore.methods
        .getUsersOfParticularDoctor(doctorsAddress)
        .call();

      // Check Paitents has already add doctor
      if (_allUsersOfDoctor.includes(accounts[0]))
        throw new Error("Doctor Already Exist");

      // Add New Doctor
      await mediStore.methods.giveAccessToDoctor(doctorsAddress).send({
        from: accounts[0],
      });
      const userData = await mediStore.methods.getUserData().call();

      // Setup Extra Things
      setDoctorAddress("");
      dispatch({ type: ACTIONS.TOGGLE_ADD_DOCTOR_MODAL });
      setUser((previousUser) => ({ ...previousUser, ...userData }));
    } catch (error) {
      ShowToast(error.message);
    }
  };

  const handleRemoveDoctor = async () => {
    try {
      // Get User Accounts
      const accounts = await web3.eth.getAccounts();

      // Get All The Users of Doctor which user want to give permissions.
      const _allUsersOfDoctor = await mediStore.methods
        .getUsersOfParticularDoctor(doctorsAddress)
        .call();

      // Check Paitents has already add doctor
      if (!_allUsersOfDoctor.includes(accounts[0]))
        throw new Error("You Haven't add This Doctor.");

      // Remove Doctor Access
      const indexOfPatientAddress = _allUsersOfDoctor.indexOf(accounts[0]);
      await mediStore.methods
        .revokeAccessFromDoctor(doctorsAddress, indexOfPatientAddress)
        .send({
          from: accounts[0],
        });

      // Update User Data
      const userData = await mediStore.methods.getUserData().call();
      setDoctorAddress("");
      dispatch({ type: ACTIONS.TOGGLE_REMOVE_DOCTOR_MODAL });
      setUser((previousUser) => ({ ...previousUser, ...userData }));
    } catch (error) {
      ShowToast(error.message);
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
              <span onClick={() => {}}>
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
          <h2>Doctors</h2>
          {/* Total Doctors */}
          <Row>
            <Col>
              <Card>
                <p className="card_detailsCard--header">Total Doctors</p>
                <p>
                  <span className="card_detailsCard--key">
                    {user.totalDoctors}
                  </span>
                </p>
              </Card>
            </Col>
            {/* Add New Doctor Card */}
            <Col
              onClick={() =>
                dispatch({ type: ACTIONS.TOGGLE_ADD_DOCTOR_MODAL })
              }
            >
              <Card>
                <p className="card_detailsCard--header">Add New Doctor</p>
              </Card>
            </Col>
            {/* Remove Old Doctor Card  */}
            <Col
              onClick={() =>
                dispatch({ type: ACTIONS.TOGGLE_REMOVE_DOCTOR_MODAL })
              }
            >
              <Card>
                <p className="card_detailsCard--header">Remove Doctor</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <CustomModal
        header="Add New Doctor"
        placeholder="eg: 0x5255975983B616Be5ADDbF735DA6cAEe384e2A1d"
        onTextChange={(e) => setDoctorAddress(e.target.value)}
        onSubmit={handleAddNewDoctor}
        isActive={state.isActive_addDoctorModal}
        setIsActive={() => dispatch({ type: ACTIONS.TOGGLE_ADD_DOCTOR_MODAL })}
      />
      <CustomModal
        header="Remove Doctor"
        placeholder="eg: 0x5255975983B616Be5ADDbF735DA6cAEe384e2A1d"
        onTextChange={(e) => setDoctorAddress(e.target.value)}
        onSubmit={handleRemoveDoctor}
        isActive={state.isActive_removeDoctorModal}
        setIsActive={() =>
          dispatch({ type: ACTIONS.TOGGLE_REMOVE_DOCTOR_MODAL })
        }
      />
    </div>
  );
};

export default PatientScreen;
