import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Main, ListLab, SignLab, Admin} from "./components/index";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/sign" element={<SignLab/>}/>
        <Route path="/list" element={<ListLab/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </div>
  );
};

export default App;
