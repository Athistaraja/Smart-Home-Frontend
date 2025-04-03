import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { SmartHomeDashboard} from "./components/SmartHomeDashboard"
import { AuthPage } from "./components/AuthPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<SmartHomeDashboard />} />
      </Routes>
    </Router>
  );
}