import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 px-6 md:px-20 py-10 mt-10">
      
      {/* Social Icons */}
      <div className="flex gap-6 text-xl mb-6">
        <FaFacebookF className="hover:text-white cursor-pointer" />
        <FaInstagram className="hover:text-white cursor-pointer" />
        <FaTwitter className="hover:text-white cursor-pointer" />
        <FaYoutube className="hover:text-white cursor-pointer" />
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
        
        <p className="hover:underline cursor-pointer">Audio Description</p>
        <p className="hover:underline cursor-pointer">Help Center</p>
        <p className="hover:underline cursor-pointer">Gift Cards</p>
        <p className="hover:underline cursor-pointer">Media Center</p>

        <p className="hover:underline cursor-pointer">Investor Relations</p>
        <p className="hover:underline cursor-pointer">Jobs</p>
        <p className="hover:underline cursor-pointer">Terms of Use</p>
        <p className="hover:underline cursor-pointer">Privacy</p>
        
        <p className="hover:underline cursor-pointer">Legal Notices</p>
        <p className="hover:underline cursor-pointer">Cookie Preferences</p>
        <p className="hover:underline cursor-pointer">Corporate Info</p>
        <p className="hover:underline cursor-pointer">Contact Us</p>
      </div>

      {/* Service Code */}
      <button className="border border-gray-400 text-gray-300 px-4 py-2 text-sm mt-6 hover:text-white hover:border-white">
        Service Code
      </button>

      {/* Bottom Text */}
      <p className="text-xs text-gray-500 mt-4">
        © 2025 Prabhulal NetflixGPT. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
