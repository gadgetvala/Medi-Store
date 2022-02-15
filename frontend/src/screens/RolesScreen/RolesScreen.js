import React, { useEffect, useState, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import mediStore from "web3_config/medistore";
import { AppContext } from "context/AppContext";
import ClipLoader from "react-spinners/BounceLoader";
import screenBG from "../../assets/rolebg.svg";
import "./styles.css";
import Header from "components/header/Header";
import { Col, Container, Row } from "reactstrap";

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
      // setNotificationTostValue("Error While Fetching User Data");
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
                <img src={screenBG} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RolesScreen;
