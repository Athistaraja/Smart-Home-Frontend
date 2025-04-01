import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register"
import { SmartHomeDashboard} from "./components/SmartHomeDashboard"


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<SmartHomeDashboard />} />
      </Routes>
    </Router>
  );
}