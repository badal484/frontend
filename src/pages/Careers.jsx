import React from "react";

export default function Careers() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Careers</h1>
      <p className="text-gray-700">
        Join SmartRent and help us build affordable living solutions for
        students and working professionals.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Open Positions</h2>

      <ul className="list-disc ml-6 text-gray-700">
        <li>Frontend Developer (React)</li>
        <li>Backend Developer (Django)</li>
        <li>UI/UX Intern</li>
        <li>Marketing & Operations Intern</li>
      </ul>
    </div>
  );
}
