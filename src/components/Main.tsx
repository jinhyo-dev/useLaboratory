import React from "react";
import Header from "./Header";
import NotMenuSelect from "./NotMenuSelect";

const Main = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <NotMenuSelect />
      </div>
    </div>
  );
};

export default Main;
