import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("myBookings");
    if (stored) {
      setBookings(JSON.parse(stored));
    }
  }, []);

  const handleBack = () => navigate("/");

  return (
    <div className="max-w-6xl mx-auto mt-12 p-6 bg-gray-50 rounded-lg shadow-lg relative">
      {/* Go Back button top-right */}
      <button
        onClick={handleBack}
        className="absolute top-6 right-6 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors duration-300 font-semibold"
      >
        Go Back
      </button>

      <h2 className="text-3xl font-extrabold mb-6 text-green-700 border-b pb-2">
        My Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500 text-lg text-center py-10">
          No bookings found!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((item) => (
            <div
              key={item.id}
              className="p-5 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-white relative"
            >
              {/* Booked badge */}
              <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Booked
              </span>

              <h3 className="font-bold text-xl text-green-600 mb-1">
                {item.hotel?.name}
              </h3>
              <p className="text-gray-600 mb-3">{item.hotel?.location}</p>

              <div className="mt-2 text-gray-700 space-y-1 text-sm">
                <p>
                  <span className="font-semibold">Guest:</span>{" "}
                  {item.bookingInfo.name}
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  {item.bookingInfo.email}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  {item.bookingInfo.phone}
                </p>
                <p>
                  <span className="font-semibold">Check-in:</span>{" "}
                  {new Date(item.bookingInfo.checkIn).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-semibold">Check-out:</span>{" "}
                  {new Date(item.bookingInfo.checkOut).toLocaleDateString()}
                </p>
                <div className="flex justify-between mt-2 text-gray-800 font-medium">
                  <p>
                    <span className="font-semibold">Price:</span> ₹
                    {item.hotel?.price}
                  </p>
                  <p>
                    <span className="font-semibold">Guests:</span>{" "}
                    {item.bookingInfo.guests}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
