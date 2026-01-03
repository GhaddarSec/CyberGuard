import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";

export default function Updates() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/updates`, { withCredentials: true })
      .then((res) => {
        setUpdates(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">Updates & Alerts</h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Stay informed about the latest cybersecurity threats and advice.
        </p>
        <div className="space-y-6">
          {updates.map((u) => (
            <div key={u.id} className="bg-white p-4 rounded-lg shadow-lg border-b-4 border-red-500">
              <h2 className="text-xl font-semibold text-gray-800">{u.name}</h2>
              <p className="text-gray-500 text-sm mb-2">
                {new Date(u.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700">{u.description}</p>
            </div>
          ))}
        </div>

        {updates.length === 0 && (
          <p className="text-center text-gray-500 mt-10">Searching for latest threats...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}