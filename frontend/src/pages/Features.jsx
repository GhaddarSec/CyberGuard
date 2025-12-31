import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";

function Features() {
  const features = [
    {
      title: "Security Tips",
      description: "Learn practical steps to protect your personal data online.",
      buttonText: "Learn More",
      link: "/features/security-tips",
    },
    {
      title: "Quizzes",
      description: "Test your knowledge about phishing, malware, and safe browsing.",
      buttonText: "Start Quiz",
      link: "/features/quizzes",
    },
    {
      title: "Updates & Alerts",
      description: "Stay informed about recent cyber threats and vulnerabilities.",
      buttonText: "View Updates",
      link: "/features/updates",
    },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />

        <div
          className="py-16 text-center bg-blue-600 text-white bg-cover"
          style={{
            backgroundImage:
              "url('public/person-suffering-from-technology-addiction-cybersickness.jpg')",
          }}
        >
          <h1 className="text-4xl font-bold mb-4 text-white">
            Explore Cyber Awareness Features
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-white">
            Learn, test, and stay updated on the latest cyber security practices.
          </p>
        </div>

        <div className="py-12 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard
              key={i}
              title={f.title}
              description={f.description}
              buttonText={f.buttonText}
              link={f.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Features;
