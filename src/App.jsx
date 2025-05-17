import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Doctors from "./pages/Doctors";
import PatientPage from "./pages/Patient/PatientPage";
import Results from "./pages/Patient/Results";

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
          <Route path="/patient" element={<PatientPage />} />
          <Route path="/patient/results" element={<Results />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
