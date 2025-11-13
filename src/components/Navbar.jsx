import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-md z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">CyberGuard</div>

      {/* Menu */}
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="text-white font-semibold">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-white font-semibold">
            About
          </a>
        </li>
        <li>
          <a href="#features" className="text-white font-semibold">
            Features
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white font-semibold">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}





export default Navbar;
