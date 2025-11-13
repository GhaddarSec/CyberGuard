import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-blue-600">
        <section className="text-center py-20 bg-blue-600 text-white bg-contain" style={{ backgroundImage: "url('public/map.jpg')" }}>
          <h1 className="text-5xl font-bold mb-4">Welcome to CyberGuard</h1>
          <p className="text-xl mb-6">
            Learn about cyber threats and how to stay safe online.
          </p>
          <a
            href="#features"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Explore Features
          </a>
        </section>

        <section id="features" className="py-8 px-6 md:px-20 bg-gray-100">
  <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
    Key Cyber Awareness Features
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Security Tips</h3>
      <p className="text-gray-700">
        Learn practical steps to protect your personal data online.
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Quizzes</h3>
      <p className="text-gray-700">
        Test your knowledge about phishing, malware, and safe browsing.
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Updates & Alerts</h3>
      <p className="text-gray-700">
        Stay informed about recent cyber threats and vulnerabilities.
      </p>
    </div>
  </div>
</section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
