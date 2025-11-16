import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SecurityTips() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">Security Tips</h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Learn practical steps to protect your personal data and devices online.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>Use strong and unique passwords for every account.</li>
          <li>Enable two-factor authentication whenever possible.</li>
          <li>Be cautious with emails and links—watch out for phishing.</li>
          <li>Keep software and systems updated to patch vulnerabilities.</li>
          <li>Regularly back up important data to prevent loss.</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
