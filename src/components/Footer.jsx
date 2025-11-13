import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-3 flex justify-between items-center w-full">
      <p className="text-white text-sm text-center flex-1">&copy; 2025 CyberGuard. All rights reserved.</p>
      <a
        href="https://github.com/GhaddarSec/CyberGuard"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 hover:text-white transition transform hover:scale-110 mr-6 md:mr-20" >
        <FaGithub size={36} />
      </a>
    </footer>
  );
}

export default Footer;
