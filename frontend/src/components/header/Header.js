import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/logo.png";
import PropTypes from "prop-types";
import "./styles.css";

const Header = ({ name }) => {
  return (
    <Link to="/">
      <div className="headerComponent">
        <img src={Logo} alt="Medi Store" />
        <h1>MediStore</h1>
        {name ? <p>Hi, {name}</p> : null}
      </div>
    </Link>
  );
};

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
