import React from "react";
// import Logo from "assets/logo.png";
import Logo from "assets/logo2.png";
import PropTypes from "prop-types";
import "./styles.css";

const Header = ({ name }) => {
  return (
    <div className="headerComponent">
      <img src={Logo} alt="Medi Store" />
      <p>Hi, {name}</p>
    </div>
  );
};

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
