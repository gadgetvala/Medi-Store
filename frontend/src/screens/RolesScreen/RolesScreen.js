import React, { useEffect, useState, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import mediStore from "web3_config/medistore";
import { AppContext } from "context/AppContext";
import ClipLoader from "react-spinners/BounceLoader";
import "./styles.css";

const RolesScreen = () => {
  const { user, setUser, setNotificationTostValue } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  const checkUserExitOrNot = async () => {
    try {
      const userData = await mediStore.methods.getUserData().call();
      setUser({ ...userData });
      if (userData.role !== "")
        setNotificationTostValue("Details Fetch Successfully");
    } catch (err) {
      setUser({
        name: "",
        role: "",
        userAddress: "",
        id: "",
      });
      setNotificationTostValue("Error While Fetching User Data");
    }
    setLoading(false);
  };

  useEffect(() => {
    checkUserExitOrNot();
  }, []);

  if (loading) {
    return (
      <div className="rolesScreen">
        <ClipLoader color={"#22577A"} size={80} />
      </div>
    );
  }

  if (user.role !== "" && user.role === "Patient") {
    return <Redirect to="/patient" />;
  }

  if (user.role !== "" && user.role === "Doctor") {
    return <Redirect to="/doctor" />;
  }

  return (
    <div className="rolesScreen">
      <Link to="/register/Doctor">Doctor</Link>
      <Link to="/register/Patient">Patient</Link>
    </div>
  );
};

export default RolesScreen;
