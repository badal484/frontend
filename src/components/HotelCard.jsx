import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider"; // ✅ make sure this exists

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth(); // ✅ removed unused `user`

  const handleBooking = () => {
    if (isLoggedIn) {
      navigate(`/booking?hotelId=${hotel.id}`);
    } else {
      localStorage.setItem("redirectAfterLogin", `/booking?hotelId=${hotel.id}`);
      navigate("/login");
    }
  };

  return (
    <div
      style={{
        width: "380px",          // ✅ Increased width
        minHeight: "380px",      // ✅ Mid-height
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
        transition: "transform 0.3s, box-shadow 0.3s",
        display: "flex",
        flexDirection: "column",
      }}
      className="hotel-card"
    >
      {/* Hotel Image */}
      <img
        src={hotel.img || "https://via.placeholder.com/380x180?text=No+Image"}
        alt={hotel.name}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />

      {/* Hotel Info */}
      <div style={{ padding: "15px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Name & Location */}
        <div>
          <h3 style={{ marginBottom: "4px", fontSize: "18px", fontWeight: "600" }}>
            {hotel.name}
          </h3>
          <p style={{ color: "#666", margin: 0 }}>{hotel.location}</p>
        </div>

        {/* Category & Sharing */}
        <div style={{ marginTop: "8px" }}>
          <p style={{ margin: "4px 0", fontSize: "14px", fontWeight: "500" }}>
            Category: <span style={{ fontWeight: "bold" }}>{hotel.category}</span>
          </p>
          <p style={{ margin: "4px 0", fontSize: "14px", fontWeight: "500" }}>
            {/* Sharing:{" "}
            <span style={{ fontWeight: "bold" }}>
              {hotel.sharing && hotel.sharing.length > 0
                ? hotel.sharing.join("  ")
                : "Single"}
            </span> */}
          </p>
        </div>

        {/* Price */}
        <p style={{ marginTop: "10px", fontWeight: "bold", fontSize: "18px", color: "#000" }}>
          ₹{hotel.price} <span style={{ fontWeight: "400", fontSize: "14px" }}>onwards</span>
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
          <button
            onClick={handleBooking}
            style={{
              flex: 1,
              fontSize: "14px",
              fontWeight: "bold",
              color: "white",
              background: "#28a745",
              padding: "8px 0",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#218838")}
            onMouseLeave={(e) => (e.target.style.background = "#28a745")}
          >
            Book Now
          </button>

          <button
            onClick={() => navigate(`/hotels/${hotel.id}`)}
            style={{
              flex: 1,
              fontSize: "14px",
              fontWeight: "bold",
              color: "white",
              background: "#6c757d",
              padding: "8px 0",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#5a6268")}
            onMouseLeave={(e) => (e.target.style.background = "#6c757d")}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
