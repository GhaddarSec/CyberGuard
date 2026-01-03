import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, { email, password }, {
        withCredentials: true 
      });
      window.location.href = "/"; 
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-800">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Cyber<span className="text-sky-400">Guard</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm">Welcome back, Agent.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              placeholder="name@company.com"
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold py-3 rounded-lg transition-transform active:scale-95 shadow-lg shadow-sky-500/20"
          >
            Login to Dashboard
          </button>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 text-xs p-3 rounded-lg text-center animate-pulse">
              {error}
            </div>
          )}
        </form>

        <p className="text-center text-slate-500 text-sm mt-8">
          Don't have an account? <a href="/signup" className="text-sky-400 hover:underline">Create Account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;