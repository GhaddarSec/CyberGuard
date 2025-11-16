import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Updates() {
  const updates = [
    { title: "Phishing Alert", date: "Nov 10, 2025", description: "Recent phishing campaign targeting email users." },
    { title: "Malware Warning", date: "Nov 9, 2025", description: "New malware found in popular downloads." },
    { title: "System Update Advice", date: "Nov 8, 2025", description: "Always update your operating system for security patches." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">Updates & Alerts</h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Stay informed about the latest cybersecurity threats and advice.
        </p>
        <div className="space-y-6">
          {updates.map((u, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">{u.title}</h2>
              <p className="text-gray-500 text-sm mb-2">{u.date}</p>
              <p className="text-gray-700">{u.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
