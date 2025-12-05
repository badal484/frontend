// src/components/ListProperty.jsx
import { useState } from "react";
import api from "../api"; // keep your existing axios instance

export default function ListProperty() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    city: "",
    message: "",
    facilities: "",
  });

  const [loading, setLoading] = useState(false);
  // 1. New state to track success
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, propertyType, city } = formData;

    if (!name || !phone || !propertyType || !city) {
      alert("Name, Phone, Property Type, and City are required!");
      return;
    }

    setLoading(true);
    try {
      // Send as JSON
      const response = await api.post("/v1/properties/create/", formData);

      if (response.status === 201) {
        // 2. Set success state to true
        setIsSuccess(true);
        
        // Clear form
        setFormData({
          name: "",
          phone: "",
          email: "",
          propertyType: "",
          city: "",
          message: "",
          facilities: "",
        });

        // 3. Optional: Reset button back to normal after 3 seconds
        setTimeout(() => {
            setIsSuccess(false);
        }, 3000);
      }
    } catch (err) {
      console.error("Full backend error:", err.response?.data || err);
      const backendMsg =
        err.response?.data?.error ||
        JSON.stringify(err.response?.data) ||
        "Something went wrong!";
      alert(backendMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">
        List Your Property on OYH
      </h1>

      <div className="bg-white shadow rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Request a Callback</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email "
            className="w-full p-3 border rounded-lg"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <input
            type="text"
            placeholder="Property Type (Flat/Room/PG/Villa)"
            className="w-full p-3 border rounded-lg"
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
          />

          <input
            type="text"
            placeholder="City"
            className="w-full p-3 border rounded-lg"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />

          <textarea
            placeholder="Message"
            className="w-full p-3 border rounded-lg"
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          <textarea
            placeholder="Facilities (WiFi, AC, Parking, CCTV, etc.)"
            className="w-full p-3 border rounded-lg"
            rows="4"
            value={formData.facilities}
            onChange={(e) => setFormData({ ...formData, facilities: e.target.value })}
          />

          {/* 4. Updated Button Logic */}
          <button
            type="submit"
            disabled={loading || isSuccess}
            className={`w-full p-3 rounded-lg font-semibold mt-4 disabled:opacity-50 text-white transition-colors duration-300
              ${isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}
            `}
          >
            {loading 
              ? "Submitting..." 
              : isSuccess 
                ? "Requested Successfully" 
                : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}