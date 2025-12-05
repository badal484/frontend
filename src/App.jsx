import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./AuthProvider.jsx";

import Navbar from "./components/navbar";
import Popnav from "./components/popnav";
import Body from "./components/body";
import Footer from "./components/footer";
import HotelList from "./components/HotelList.jsx";
import HotelDetails from "./pages/HotelDetails";
import AboutUs from "./pages/AboutUs";
import Terms from "./pages/Terms";
import Careers from "./pages/Careers";
import Query from "./pages/Query";
import GuestPolicy from "./pages/GuestPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TrustSafety from "./pages/TrustSafety";
import ListProperty from "./pages/ListProperty";
import BookingPage from "./pages/BookingPage";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Help from "./pages/Help";
import MyBookings from "./pages/MyBookings.jsx";

const App = () => {
  const [search, setSearch] = useState("");
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/hotels/")
      .then((res) => setHotels(res.data))
      .catch((err) => console.error("Error fetching hotels:", err));
  }, []);

  const filteredHotels =
    search.trim() === ""
      ? []
      : hotels.filter(
          (hotel) =>
            hotel.name.toLowerCase().includes(search.toLowerCase()) ||
            hotel.location.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Popnav />
                <Body search={search} setSearch={setSearch} suggestions={filteredHotels} />
              </>
            }
          />
          <Route path="/hotels" element={<HotelList />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/query" element={<Query />} />
          <Route path="/guest-policy" element={<GuestPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/trust-safety" element={<TrustSafety />} />
          <Route path="/list-property" element={<ListProperty />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/help" element={<Help />} />
          <Route path="/mybookings" element={<MyBookings />} />
          
        </Routes>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

