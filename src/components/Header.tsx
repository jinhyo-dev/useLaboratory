import React, { useState } from "react";
import "../styles/header.css";
import "../styles/sidebar.css";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header-container">
      <div className="sidebar">
        <AiOutlineMenu className="AiOutlineMenu" />

        <div className='sidebar-container'>
          <AiOutlineClose className='AiOutlineClose' />

          <div className='menu-list'>
            <Link to="/sign">
              <input
                type="submit"
                value="랩실 신청"
                className='sign-btn'
              />
            </Link>

            <Link to="/list">
              <input
                type="submit"
                value="랩실 신청자목록"
                className='list-btn'
              />
            </Link>

            <Link to="/admin">
              <input
                type="submit"
                value="관리자"
                className='admin'
              />
            </Link>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>



    </div>
  );
};

export default Header;
