// src/pages/PGDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PGDetails = () => {
  const { id } = useParams(); // get id from URL
  const [pg, setPg] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/pg/${id}/`)
      .then((res) => setPg(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!pg) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{pg.name}</h1>
      <img
        src={pg.img}
        alt={pg.name}
        style={{ width: "400px", height: "250px", borderRadius: "10px", objectFit: "cover" }}
      />

      <p><strong>Location:</strong> {pg.location}</p>
      <p><strong>Price:</strong> ₹{pg.price}</p>
      <p><strong>Description:</strong> {pg.desc}</p>
    </div>
  );
};

export default PGDetails;
