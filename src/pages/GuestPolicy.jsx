import React from "react";

export default function GuestPolicy() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Guest Policy</h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Guest Entry Rules</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Guests must be registered at the reception/security desk before entering.</li>
            <li>Valid government ID is required for all guests.</li>
            <li>Guest entry is permitted only with resident and staff approval.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Visiting Hours</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Day visitors are allowed from <strong>9:00 AM to 9:00 PM</strong>.</li>
            <li>Overnight stays are not allowed without approval.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Overnight Guest Policy</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Overnight stay is not allowed without written permission.</li>
            <li>Additional charges may apply for approved stays.</li>
            <li>Only same-gender guests may stay overnight (if allowed as per property rules).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Restrictions & Prohibited Actions</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Guests are not allowed in restricted areas.</li>
            <li>Alcohol, smoking, or illegal substances are prohibited.</li>
            <li>No loud noises or disturbances allowed.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Resident Responsibility</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Residents are responsible for their guests' behavior.</li>
            <li>Damages caused by guests will be charged to the resident.</li>
            <li>Repeated policy violations may result in penalties.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Security & Privacy</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>CCTV is active in all common areas.</li>
            <li>Guests must comply with all security rules.</li>
            <li>Residents must not share access cards/keys with guests.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Management Rights</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Management may deny guest entry if needed for security.</li>
            <li>Policies may vary across different properties.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
