import React, { useState, useContext } from "react";
import { AppContext } from "context/AppContext";
import { useParams } from "react-router-dom";
import mediStore from "web3_config/medistore";
import web3 from "web3_config/web3";
import ClipLoader from "react-spinners/BounceLoader";
import "./styles.css";

const RegisterScreen = () => {
  let { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AppContext);

  // Text Controller
  const [nameController, setNameController] = useState("");
  const [dobController, setDobController] = useState("");
  const [addressController, setAddressController] = useState("");

  // Functions
  const registerUser = async () => {
    if (
      nameController === "" ||
      dobController === "" ||
      addressController === ""
    ) {
      alert("Please Provide valid details");
      return;
    }

    setLoading(true);
    try {
      const accounts = await web3.eth.getAccounts();

      await mediStore.methods
        .newUser(nameController, slug, dobController, addressController)
        .send({
          from: accounts[0],
        });

      const userData = await mediStore.methods.getUserData().call();
      setUser((previousUser) => ({ ...previousUser, ...userData }));
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="registerScreen">
        <ClipLoader color={"#22577A"} size={80} />
      </div>
    );
  }

  return (
    <div className="registerScreen">
      <div className="button">{slug}</div>
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
  );
};

export default RegisterScreen;
