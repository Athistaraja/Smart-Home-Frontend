import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Login</h2>
        <input className="p-2 border rounded mb-2 w-80" type="email" placeholder="Email" />
        <input className="p-2 border rounded mb-4 w-80" type="password" placeholder="Password" />
        <button className="bg-blue-500 text-white px-6 py-2 rounded" onClick={() => navigate("/dashboard")}>
          Login
        </button>
        <p className="mt-4">Don't have an account? <Link to="/register" className="text-blue-500">Register</Link></p>
      </div>
    );
  }