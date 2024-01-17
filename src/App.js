// App.js

import React from "react";
import "./pages/home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
//  <div
// className="btn circle-write-post rounded-circle d-flex justify-content-center align-items-center position-fixed d-lg-none"
// style={{ bottom: "18px", right: "18px" }}
// onClick={() => console.log("Pencil icon clicked!")}
// >
// <img src={edit} alt="write a post" height={24} width={24} />
// </div>
