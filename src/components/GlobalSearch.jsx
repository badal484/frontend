import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GlobalSearch = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/hotels/")
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((err) => console.error("Error fetching hotels:", err));
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = hotels
      .map((h) => h.location)
      .filter(
        (loc, index, arr) =>
          loc?.toLowerCase().includes(search.toLowerCase()) &&
          arr.indexOf(loc) === index
      );

    setSuggestions(filtered);
  }, [search, hotels]);

  const handleSelect = (loc) => {
    setSearch("");
    setSuggestions([]);
    navigate(`/hotels?search=${encodeURIComponent(loc)}`);
  };

  return (
    <div className="relative">
      <input
        className="border p-2 rounded w-60"
        type="text"
        placeholder="Search locations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {suggestions.length > 0 && (
        <div className="absolute top-10 w-60 bg-white border rounded-md shadow-lg z-50">
          {suggestions.map((loc) => (
            <div
              key={loc}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelect(loc)}
            >
              {loc}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
