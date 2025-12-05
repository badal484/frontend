import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="p-6 max-w-4xl mx-auto font-serif leading-7">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>Own Your Heaven (OYH)</strong>, we are committed to
        protecting your personal information and ensuring a safe, seamless
        stay-booking experience. This Privacy Policy explains how we collect,
        use, and protect your data when you interact with our platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Name, email address, and phone number</li>
        <li>Location details for showing nearby PG/hostel stays</li>
        <li>Booking details and preferences</li>
        <li>Device and browser information</li>
        <li>Payment-related data (handled securely via third-party payment partners)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To show stays and PGs relevant to your location</li>
        <li>For booking confirmation and customer support</li>
        <li>To improve app performance and user experience</li>
        <li>To send important updates, offers, and alerts</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Protection & Security</h2>
      <p className="mb-4">
        Your data is stored securely using industry-standard encryption and
        security practices. We never sell your personal information to third
        parties.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Sharing of Information</h2>
      <p className="mb-4">
        We only share information with trusted service partners such as:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Payment gateways</li>
        <li>Hosting and analytics services</li>
        <li>Customer support partners</li>
      </ul>
      <p className="mb-4">
        These partners are required to maintain strict confidentiality.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Cookies & Tracking</h2>
      <p className="mb-4">
        We use cookies to improve your browsing experience, remember your
        preferences, and analyze site usage. You can disable cookies anytime
        through browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        6. Your Rights & Choices
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Request deletion of your data</li>
        <li>Update your account information</li>
        <li>Request a copy of your stored data</li>
        <li>Opt-out of promotional messages</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Updates to Policy</h2>
      <p className="mb-4">
        OYH may update this Privacy Policy periodically. Any changes will be
        reflected on this page with an updated date.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="mb-4">
        For any concerns related to privacy or data usage, feel free to contact
        us at: <br />
        <strong>Email:</strong> support@oyh.com <br />
        <strong>Phone:</strong> +91-9876543210
      </p>

      <p className="mt-10 text-gray-600">Last updated: January 2025</p>
    </div>
  );
}
