import React from "react";
import { Link } from "react-router-dom";

const FeatureCard=({ title, description, buttonText, link }) =>{
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link to={link} className="bg-black font-bold !text-white px-4 py-2 rounded hover:bg-gray-900 transition inline-block no-underline">
  {buttonText}
</Link>
    </div>
  );
}

export default FeatureCard;
