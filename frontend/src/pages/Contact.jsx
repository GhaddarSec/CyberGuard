import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5002/api/contact", formData)
      .then((res) => {
        alert(`Message sent! Thank you, ${formData.name}.`);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Error sending message. Please try again later...");
      });
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 bg-contain flex flex-col" style={{ backgroundImage: "url('public/cybersecurity-concept-illustration.jpg')" }}>
      <Navbar />
      <div className="flex-grow flex justify-center items-center w-full px-4 py-12">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className={`w-full p-3 rounded-md transition 
                ${formData.name && formData.email && formData.message 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
              disabled={!(formData.name && formData.email && formData.message)}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;