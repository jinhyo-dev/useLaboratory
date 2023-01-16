import React from "react";
import "../styles/header.css";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>

      <Link to="/admin">
        <p className="admin-pointer">관리자</p>
      </Link>
    </div>
  );
};

export default header;
