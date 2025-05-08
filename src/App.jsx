import { useState } from "react";
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Doctors from "./pages/Doctors";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
