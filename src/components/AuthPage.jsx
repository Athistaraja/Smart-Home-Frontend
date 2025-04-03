import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AuthPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <motion.div 
  initial={{ opacity: 0, scale: 0.9 }} 
  animate={{ opacity: 1, scale: 1 }} 
  transition={{ duration: 0.5 }}
  className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4"
>
  <div className="relative flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Left Side */}
    <motion.div 
      initial={{ x: isRegister ? -300 : 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: isRegister ? 300 : -300, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full md:w-1/2 flex flex-col items-center justify-center p-10 transition-all ${isRegister ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}
    >
      <h2 className="text-3xl font-bold mb-4">{isRegister ? "Welcome Back!" : "Join Us!"}</h2>
      <p className="mb-6">{isRegister ? "Already have an account?" : "Don't have an account?"}</p>
      <button onClick={() => setIsRegister(!isRegister)} className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold shadow-md hover:scale-110 transition duration-300">
        {isRegister ? "Login" : "Register"}
      </button>
    </motion.div>
    
    {/* Right Side */}
    <AnimatePresence mode="wait">
      <motion.div 
        key={isRegister ? "registerForm" : "loginForm"}
        initial={{ x: isRegister ? 300 : -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: isRegister ? -300 : 300, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 bg-white p-10 flex flex-col items-center text-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900">{isRegister ? "Register" : "Login"}</h2>
        <div className="flex space-x-4 mb-6">
          <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">F</button>
          <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">G+</button>
          <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">in</button>
        </div>
        <p className="text-gray-500 mb-4">or use your email for registration:</p>
        <input className="p-3 border rounded-full mb-4 w-full bg-gray-100 text-gray-900 placeholder-gray-600" type="email" placeholder="Email" />
        {isRegister && <input className="p-3 border rounded-full mb-4 w-full bg-gray-100 text-gray-900 placeholder-gray-600" type="text" placeholder="Full Name" />}
        <div className="relative w-full">
          <input className="p-3 border rounded-full w-full bg-gray-100 text-gray-900 placeholder-gray-600" type={showPassword ? "text" : "password"} placeholder="Password" />
          <button className="absolute right-5 top-4 text-gray-500 hover:text-gray-700 transition" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        <button className="bg-green-500 text-white px-6 py-3 rounded-full mt-6 w-full font-bold shadow-md hover:scale-110 transition duration-300" onClick={() => navigate("/dashboard")}>
          {isRegister ? "Sign Up" : "Login"}
        </button>
      </motion.div>
    </AnimatePresence>
  </div>
</motion.div>
  );
}
