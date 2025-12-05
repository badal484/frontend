import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      console.error("Hotel ID is undefined!");
      setLoading(false);
      return;
    }

    fetch(`http://127.0.0.1:8000/api/v1/hotels/${id}/`)
      .then((res) => {
        if (!res.ok) throw new Error("Hotel not found or server error");
        return res.json();
      })
      .then((data) => setHotel(data))
      .catch((err) => {
        console.error(err);
        setHotel(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!hotel) return <p>Hotel not found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back
      </button>

      {/* Property Image */}
      <div className="mb-6">
        <img
          src={hotel.img || "https://via.placeholder.com/600x400?text=No+Image"}
          alt={hotel.name}
          className="w-full h-80 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Property Info */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-2">{hotel.name}</h2>
        <p className="text-gray-600 mb-2">{hotel.location}</p>
        <p className="text-red-600 font-bold text-xl mb-4">₹{hotel.price}</p>
        {hotel.desc && <p className="text-gray-700">{hotel.desc}</p>}
      </div>
    </div>
  );
};

export default HotelDetails;


