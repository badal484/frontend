import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start pt-20 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Need Help?
        </h1>

        <p className="text-gray-700 text-center mb-6">
          We're here for you. Choose any help option below.
        </p>

        <div className="space-y-4">
          
          {/* Email Card */}
          <div className="p-5 border rounded-xl shadow hover:shadow-md transition bg-gray-100">
            <h2 className="text-xl font-semibold mb-1">Email Us</h2>
            <p className="text-gray-600 mb-3">We reply within 24 hours</p>
            <a
              href="mailto:ownyourheaven@gmail.com"
              className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              ownyourheaven@gmail.com
            </a>
          </div>

          {/* Call Card */}
          <div className="p-5 border rounded-xl shadow hover:shadow-md transition bg-gray-100">
            <h2 className="text-xl font-semibold mb-1">Call Us</h2>
            <p className="text-gray-600 mb-3">Available 9 AM – 9 PM</p>
            <a
              href="tel:6204646300"
              className="inline-block px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              6204646300
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-blue-600 hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
