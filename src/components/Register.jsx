import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

export function Register() {
    const navigate = useNavigate();
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Register</h2>
        <input className="p-2 border rounded mb-2 w-80" type="text" placeholder="Name" />
        <input className="p-2 border rounded mb-2 w-80" type="email" placeholder="Email" />
        <input className="p-2 border rounded mb-2 w-80" type="password" placeholder="Password" />
        <input className="p-2 border rounded mb-4 w-80" type="password" placeholder="Confirm Password" />
        <button className="bg-green-500 text-white px-6 py-2 rounded" onClick={() => navigate("/dashboard")}>
          Register
        </button>
        <p className="mt-4">Already have an account? <Link to="/" className="text-blue-500">Login</Link></p>
      </div>
    );
  }