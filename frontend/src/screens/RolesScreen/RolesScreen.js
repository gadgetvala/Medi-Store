// Global Imports
import React, { useEffect, useState, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
// Functionality Imports
import web3 from "web3_config/web3";
import mediStore from "web3_config/medistore";
import { AppContext } from "context/AppContext";
import ShowToast from "components/notificationToast/ShowToast";
// Componets Imports
import Header from "components/header/Header";
import { Col, Container, Row } from "reactstrap";
import ClipLoader from "react-spinners/BounceLoader";
// Assets Imports
import screenBG from "../../assets/rolebg.svg";
// Styles Imports
import "./styles.css";

/**
 * Roles Screen Component
 */
const RolesScreen = () => {
  const { user, setUser } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  const checkUserExitOrNot = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const userData = await mediStore.methods.getUserData(accounts[0]).call();

      setUser({ ...userData });
      if (userData.role !== "") ShowToast("Details Fetch Successfully");
    } catch (err) {}
    setLoading(false);
  };

  useEffect(() => {
    checkUserExitOrNot();
    // eslint-disable-next-line
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
    <>
      <Header />
      <section className="hero-area bg_cover">
        <Container fluid>
          <Row>
            <Col md="7">
              <div className="hero-content">
                <h1 className="title">
                  <span>Privacy</span>
                  <p>For you and family.</p>
                </h1>
                <ul className="nav">
                  <li>
                    <Link className="main-btn" to="/register/Doctor">
                      Continue as Doctor <i className="fas fa-angle-right"></i>
                    </Link>
                  </li>
                  <li>
                    <a className="main-btn main-btn-2" href="/register/Patient">
                      Continue as Patient<i className="fas fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="4">
              <div className="screenBG">
                <img src={screenBG} alt="Main Background" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RolesScreen;
