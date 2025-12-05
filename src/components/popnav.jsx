import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Popnav = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch all hotels and extract unique locations
    axios
      .get("http://127.0.0.1:8000/api/v1/hotels/")
      .then((res) => {
        const uniqueLocations = [
          ...new Set(res.data.map((hotel) => hotel.location)),
        ];
        setLocations(uniqueLocations);
      })
      .catch((err) => console.error("Error fetching locations:", err));
  }, []);

  return (
    <div className="">
      <div className="bg-white h-10 border justify-evenly flex overflow-x-auto">
        {locations.slice(0,7).map((loc) => (
          <div
            key={loc}
            className="h-9 min-w-max px-4 cursor-pointer flex items-center hover:text-red-500"
            onClick={() => navigate(`/hotels?search=${encodeURIComponent(loc)}`)}
          >
            {loc}
          </div>
          
        ))}
        <p className="mt-2 cursor-pointer" onClick={()=>navigate('/hotels')} >More Places</p>
      </div>
    </div>
  );
};

export default Popnav;
