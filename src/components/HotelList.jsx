import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import { useLocation } from "react-router-dom";
import GlobalSearch from "./GlobalSearch";

const HotelList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("");
  const [sharing, setSharing] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(14000);

  const buildUrl = () => {
    const base = "http://127.0.0.1:8000/api/v1/hotels/";
    const params = new URLSearchParams();

    if (searchQuery) params.append("location", searchQuery);
    if (category) params.append("category", category);
    if (sharing) params.append("sharing", sharing);
    if (minPrice > 0) params.append("min_price", minPrice);
    if (maxPrice < 14000) params.append("max_price", maxPrice);

    return params.toString() ? `${base}?${params.toString()}` : base;
  };

  useEffect(() => {
    setLoading(true);
    fetch(buildUrl())
      .then((res) => res.json())
      .then((data) => {
        setHotels(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching hotels:", err));
  }, [searchQuery, category, sharing, minPrice, maxPrice]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Search bar moved here */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">
          Available PGs, Apartments in {searchQuery || "All Locations"}
        </h2>
        <GlobalSearch />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-8">
        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Boys">Boys</option>
          <option value="Girls">Girls</option>
          <option value="Unisex">Unisex</option>
        </select>

        <select
          className="border p-2 rounded"
          value={sharing}
          onChange={(e) => setSharing(e.target.value)}
        >
          <option value="">Room Sharing</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Triple">Triple</option>
        </select>

        <div className="flex items-center gap-3">
          <span className="text-sm">₹{minPrice} - ₹{maxPrice}</span>
          <input
            type="range"
            min="0"
            max="14000"
            step="500"
            value={maxPrice}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val >= minPrice) setMaxPrice(val);
            }}
          />
        </div>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setCategory("");
            setSharing("");
            setMinPrice(0);
            setMaxPrice(14000);
          }}
        >
          Clear Filters
        </button>
      </div>

      {/* Hotel Cards */}
      {loading ? (
        <p className="text-lg">Loading...</p>
      ) : hotels.length === 0 ? (
        <p className="text-lg text-gray-700">
          No results found for "{searchQuery}"
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-14">
          {hotels.map((hotel) => (
            <HotelCard key={hotel._id || hotel.id} hotel={hotel} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelList;
