import React from "react";
import Header from "./Header";
import NotMenuSelect from "./NotMenuSelect";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <NotMenuSelect />
      </div>
    </div>
  );
};

export default Main;
