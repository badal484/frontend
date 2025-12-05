import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700">
        <div className="mb-6 md:mb-0">
          <h1 className="text-5xl font-bold mb-2">OYH</h1>
          <p className="text-lg text-gray-300">Find Your Stays...</p>
        </div>

        {/* App download buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <a href="https://www.apple.com/in/app-store/" className="hover:scale-105 transition-transform">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Download_on_the_Mac_App_Store_Badge_NL_RGB_blk.svg/2560px-Download_on_the_Mac_App_Store_Badge_NL_RGB_blk.svg.png"
              alt="App Store"
              className="h-14"
            />
          </a>
          <a href="https://play.google.com/store/games?hl=en" className="hover:scale-105 transition-transform">
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/871/365/non_2x/google-play-store-download-button-in-black-colors-download-on-the-google-play-store-free-png.png"
              alt="Google Play"
              className="h-14"
            />
          </a>
        </div>
      </div>

      {/* Links section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700">
        <div className="flex flex-col gap-3">
          <Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link>
          <Link to="/terms" className="hover:text-green-400 transition-colors">Terms & Conditions</Link>
          <Link to="/careers" className="hover:text-green-400 transition-colors">Careers</Link>
          <Link to="/query" className="hover:text-green-400 transition-colors">Query?</Link>
        </div>
        <div className="flex flex-col gap-3 border-l border-gray-700 pl-6">
          <Link to="/guest-policy" className="hover:text-green-400 transition-colors">Guest Policy</Link>
          <Link to="/privacy-policy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
          <Link to="/trust-safety" className="hover:text-green-400 transition-colors">Trust & Safety</Link>
        </div>
        <div className="flex flex-col gap-3 border-l border-gray-700 pl-6">
          <p className="text-gray-400">Connect with us:</p>
          <div className="flex gap-4">
            <a href="#" className="hover:scale-110 transition-transform">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                alt="Instagram"
                className="h-8 w-8"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img
                src="https://cdn-icons-png.flaticon.com/512/20/20673.png"
                alt="Facebook"
                className="h-8 w-8"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Twitter_Logo_2021.svg"
                alt="Twitter"
                className="h-8 w-8"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Whatsapp_logo_1.png"
                alt="WhatsApp"
                className="h-8 w-8"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} OYH. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

