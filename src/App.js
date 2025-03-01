import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import ContactPage from "./pages/contact";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Courses from "./pages/Courses";
import Payment from "./pages/paymentGate";
import Store from "./pages/store";


function App(){
  return (
    <Router>
        <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/landingPage" element={<LandingPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/login" element={<Login />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/payment" element={<Payment />} />
  <Route path="/store" element={<Store />} />
</Routes>
    </Router>
  );
}

export default App;
