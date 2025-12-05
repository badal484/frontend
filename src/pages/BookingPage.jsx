import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const BookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const hotelId = searchParams.get("hotelId");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hotelId) return alert("Hotel ID missing!");

    setLoading(true);

    try {
      // Send booking to backend
      await axios.post("http://127.0.0.1:8000/api/v1/bookings/create/", {
        hotelId: hotelId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        checkIn: formData.checkIn,   // string YYYY-MM-DD
        checkOut: formData.checkOut, // string YYYY-MM-DD
        guests: parseInt(formData.guests, 10),
      });

      setSuccessMsg("Booking successful!");
      setTimeout(() => navigate("/mybookings"), 1500);

    } catch (err) {
      console.error("Booking error:", err.response?.data || err);
      alert("Booking failed! Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
      {successMsg && <p className="text-green-600 mb-4">{successMsg}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="border p-2 rounded" />
        <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="border p-2 rounded" />
        <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} className="border p-2 rounded" />
        <input type="date" name="checkIn" required value={formData.checkIn} onChange={handleChange} className="border p-2 rounded" />
        <input type="date" name="checkOut" required value={formData.checkOut} onChange={handleChange} className="border p-2 rounded" />
        <input type="number" name="guests" min={1} required value={formData.guests} onChange={handleChange} className="border p-2 rounded" />
        <button type="submit" disabled={loading} className="bg-green-600 text-white py-2 rounded font-bold">
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
