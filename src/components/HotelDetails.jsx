import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/hotels/${id}/`);
        setHotel(response.data);
      } catch (error) {
        console.error("Failed to fetch hotel details",error);
      }
    };
    fetchHotel();
  }, [id]);

  if (!hotel) return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Loading...</h2>;

  return (
    <div style={{
      maxWidth: "1050px",
      margin: "40px auto",
      padding: "20px",
      boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
      borderRadius: "12px",
      background: "#fff",
    }}>
      
      <img 
        src={hotel.img}
        alt={hotel.name}
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "20px"
        }}
      />

      <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>{hotel.name}</h1>
      <p style={{ color: "#666", fontSize: "16px" }}>{hotel.location}</p>

      <div style={{ margin: "15px 0", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <span 
          style={{
            background: "#ffcc00",
            padding: "5px 12px",
            borderRadius: "15px",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          {hotel.category}
        </span>
        
        {hotel.sharing?.map((s, idx) => (
          <span key={idx}
            style={{
              background: "#007bff",
              color: "white",
              padding: "5px 12px",
              borderRadius: "15px",
              fontSize: "13px",
              fontWeight: "500"
            }}
          >
            {s} Sharing
          </span>
        ))}
      </div>

      <h2 style={{ marginTop: "20px", color: "#111" }}>
        ₹{hotel.price} <span style={{ fontSize: "16px", fontWeight: "400" }}>per month</span>
      </h2>

      <h3 style={{ marginTop: "25px", fontSize: "20px" }}>Description</h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#444" }}>
        {hotel.description}
      </p>

    </div>
  );
};

export default HotelDetails;
