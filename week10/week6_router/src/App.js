import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhoAmI from "./pages/WhoamI";
import Menubar from "./pages/Menubar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/whoami" element={<WhoAmI />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
