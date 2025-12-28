import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";

export default function SecurityTips() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5002/api/security-tips")
      .then((res) => {
        setTips(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">Security Tips</h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Learn practical steps to protect your personal data and devices online.
        </p>
        
        <div className="space-y-6">
          {tips.map((tip) => (
            <div key={tip.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{tip.title}</h2>
              <p className="text-gray-700 leading-relaxed">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}