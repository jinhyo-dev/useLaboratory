import React from "react";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";

const sidebar = () => {
  return (
    <div className="sidebar-container">
      <Link to="/sign">
        <input
          type="submit"
          name="sign-byutton"
          className="sign-btn"
          value="랩실 신청"
        />
      </Link>

      <Link to="/list">
        <input
          type="submit"
          name="list-button"
          className="list-btn"
          value="랩실 신청자 목록"
        />
      </Link>
    </div>
  );
};

export default sidebar;
