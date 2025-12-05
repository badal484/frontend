import React from "react";

const Terms = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Terms & Conditions</h1>

        <p className="mb-4 text-gray-700">
          Welcome to Own Your Heaven (OYH). By accessing or using our website,
          you agree to the following Terms and Conditions. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4 text-gray-700">
          By using our platform, you agree to comply with and be bound by these
          Terms & Conditions.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">2. Use of the Website</h2>
        <p className="mb-4 text-gray-700">
          You agree not to misuse the site, attempt unauthorized access, or use
          the platform for any illegal activities.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">3. Booking & Payments</h2>
        <p className="mb-4 text-gray-700">
          All bookings are subject to availability. Prices may change based on
          location, demand, and property policies.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">4. User Responsibilities</h2>
        <p className="mb-4 text-gray-700">
          You must provide accurate information during registration or booking.
          Any misuse may result in account suspension.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">5. Cancellation Policy</h2>
        <p className="mb-4 text-gray-700">
          Cancellation terms depend on individual PGs/hostels. Check property
          details before booking.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">6. Limitation of Liability</h2>
        <p className="mb-4 text-gray-700">
          OYH is not responsible for disputes between tenants and property owners.
          We act only as a listing and discovery platform.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">7. Changes to Terms</h2>
        <p className="mb-4 text-gray-700">
          We may update these Terms at any time. Continued use of the platform
          implies acceptance of the revised Terms.
        </p>

        <p className="text-gray-600 mt-6">
          If you have questions, contact us at: <b>support@oyh.com</b>
        </p>
      </div>
    </div>
  );
};

export default Terms;
