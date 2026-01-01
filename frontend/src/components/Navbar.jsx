import React from "react";
import { Link } from "react-router-dom";

const Navbar=() =>{
  return (
    <nav className=" shadow-none border-none fixed top-0 left-0 w-full  text-white px-6 py-4 flex justify-between items-center shadow-md z-50">
      <div className="text-2xl font-bold text-blue-600"><a href="https://github.com/GhaddarSec/CyberGuard" target="_blank">CyberGuard</a></div>
      <ul className="flex space-x-6">
        <li>
      <Link to="/" className="hover:text-gray-200">Home</Link>
    </li>
    <li>
      <Link to="/about" className="hover:text-gray-200">About</Link>
    </li>
    <li>
      <Link to="/features" className="hover:text-gray-200">Features</Link>
    </li>
    <li>
      <Link to="/contact" className="hover:text-gray-200">Contact</Link>
    </li>
    <li>
      <Link to="/login" className="hover:text-gray-200">Login</Link>
    </li>
      </ul>
    </nav>
  );
}





export default Navbar;
