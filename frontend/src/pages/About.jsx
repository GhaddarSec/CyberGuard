import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <main className="flex-grow">
      <Navbar/> 

      <section className="text-center py-12 bg-black-600 text-white">
  <h1 className="text-4xl md:text-5xl font-bold mb-3">Welcome to CyberGuard</h1>
  <p className="text-lg md:text-xl">
    Learn about cyber threats and how to stay safe online.
  </p>
</section>

      <section className="py-16 px-6 md:px-20 bg-cover bg-center text-white" style={{ backgroundImage: "url('/cybersecurity-concept-illustration.jpg')" }}>
  <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-black">
    Our Mission
  </h2>
  <p className="text-xl md:text-2xl leading-relaxed  text-black bold">
    To provide practical, easy-to-understand guidance on protecting your
    personal information, understanding cyber threats, and improving
    digital hygiene for individuals and organizations.
  </p>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">Vision</h3>
      <p className="text-gray-700">
        To create a world where everyone can navigate the digital space
        safely and confidently.
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">Values</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Education & Awareness</li>
        <li>Transparency</li>
        <li>Practical Security Guidance</li>
      </ul>
    </div>
  </div>
</section>

      <section className="py-16 px-6 md:px-20 bg-blue-50">
  <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
    Why Cyber Awareness Matters
  </h2>
  <p className="text-center max-w-3xl mx-auto text-lg text-gray-700">
    Millions of people fall victim to phishing, malware, and online scams
    every year. Cyber awareness is the first step in preventing these
    attacks and ensuring personal and organizational safety online.
  </p>
</section>
<Footer/>
    </main>
  );
}

export default About;
