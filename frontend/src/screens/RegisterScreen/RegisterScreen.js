import React, { useState, useContext } from "react";
import { AppContext } from "context/AppContext";
import { useParams, Redirect } from "react-router-dom";
import mediStore from "web3_config/medistore";
import web3 from "web3_config/web3";
import ClipLoader from "react-spinners/BounceLoader";
import "./styles.css";
import Header from "components/header/Header";

const RegisterScreen = () => {
  let { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const { user, setUser, setNotificationTostValue } = useContext(AppContext);

  // Text Controller
  const [nameController, setNameController] = useState("");
  const [dobController, setDobController] = useState("");
  const [addressController, setAddressController] = useState("");

  // Functions
  const registerUser = async () => {
    // if (
    //   nameController === "" ||
    //   dobController === "" ||
    //   addressController === ""
    // ) {
    //   alert("Please Provide valid details");
    //   return;
    // }

    // setLoading(true);
    try {
      // const accounts = await web3.eth.getAccounts();
      // console.log(accounts[0]);
      // await mediStore.methods
      //   .newUser(nameController, slug, dobController, addressController)
      //   .send({
      //     from: accounts[0],
      //   });
      // const userData = await mediStore.methods.getUserData().call();
      // setUser((previousUser) => ({ ...previousUser, ...userData }));
    } catch (err) {
      // console.log(err);
      // setNotificationTostValue(err);
      // setUser((previousUser) => ({}));
    }
    setLoading(false);
  };

  // if (user.role !== "") setNotificationTostValue("User Register Successfully");

  if (true) {
    return <Redirect to="/patient" />;
  }

  if (user.role !== "" && user.role === "Doctor") {
    return <Redirect to="/doctor" />;
  }

  if (loading) {
    return (
      <div className="registerScreen">
        <ClipLoader color={"#22577A"} size={80} />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="registerScreen">
        <div className="form-data">
          <div className="form-data-hearder">
            <h1>{slug}</h1>
            <hr color="#ffc000" />
          </div>
          <input
            type="text"
            placeholder="Name"
            value={nameController}
            onChange={(e) => setNameController(e.target.value)}
          />
          <input
            type="text"
            placeholder="DOB"
            value={dobController}
            onChange={(e) => setDobController(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            value={addressController}
            onChange={(e) => setAddressController(e.target.value)}
          />
          <button onClick={registerUser}>Register</button>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
