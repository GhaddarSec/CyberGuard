import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5002/api/auth/signup", { username, email, password });
      window.location.href = "/login";
    } catch (err) {
      setError("Error. try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-800">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Cyber<span className="text-sky-400">Guard</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm">Join the security network.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Username</label>
            <input 
              type="text" 
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-sky-500 hover:bg-sky-400 text-white/90 font-bold py-3 rounded-lg transition-transform active:scale-95 shadow-lg shadow-sky-500/20"
          >
            Create Account
          </button>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 text-xs p-3 rounded-lg text-center">
              {error}
            </div>
          )}
        </form>

        <p className="text-center text-slate-500 text-sm mt-8">
          Already a member? <a href="/login" className="text-sky-400 hover:underline">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;