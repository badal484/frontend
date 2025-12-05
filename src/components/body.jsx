import React, { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";

const Body = ({ tasks = [] }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [hotels, setHotels] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const [showPop, setShowPop] = useState(false);
  const [guest, setGuest] = useState(1);
  const [room, setRoom] = useState(1);
  const [showDatePop, setShowDatePop] = useState(false);

  // ================= DATE RANGE =================
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [range, setRange] = useState([
    { startDate: today, endDate: tomorrow, key: "selection" },
  ]);

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "2-digit" });

  const finalDate = `${formatDate(range[0].startDate)} - ${formatDate(range[0].endDate)}`;

  // ================= FETCH HOTELS =================
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/hotels/")
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((err) => console.error(err));
  }, []);

  // ================= SUGGESTIONS =================
  useEffect(() => {
    if (search.trim() === "") {
      setSuggestions([]);
      return;
    }
    const filtered = hotels
      .map((h) => h.location)
      .filter((loc, i, arr) => loc.toLowerCase().includes(search.toLowerCase()) && arr.indexOf(loc) === i);
    setSuggestions(filtered);
  }, [search, hotels]);

  const handleSearchClick = (location) => {
    setSearch("");
    navigate(`/hotels?search=${encodeURIComponent(location)}`);
  };

  return (
    <div>
      {/* ================= SEARCH BAR HEADER ================= */}
      <div
        className="flex justify-center items-center h-70 bg-[url(https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-52393.jpg?semt=ais_hybrid&w=740&q=80)]"
      >
        <div className="flex relative">
          {/* Search Input */}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white p-4 w-90 border-r"
            type="text"
            placeholder="Search by city, PGs, or Neighborhood"
          />

          {/* Dropdown Suggestions */}
          {suggestions.length > 0 && (
            <div className="absolute bg-white border rounded-md shadow-md w-90 top-16 z-50">
              {suggestions.map((loc) => (
                <div
                  key={loc}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSearchClick(loc)}
                >
                  {loc}
                </div>
              ))}
            </div>
          )}

          {/* Date Picker */}
          <p
            onClick={() => setShowDatePop(!showDatePop)}
            className="bg-white flex justify-center items-center w-60 border-r cursor-pointer"
          >
            {finalDate}
          </p>
          {showDatePop && (
            <div className="absolute top-16 left-80 bg-white shadow-xl p-2 rounded-lg z-50">
              <DateRange
                ranges={range}
                onChange={(item) => setRange([item.selection])}
                moveRangeOnFirstSelection={false}
                minDate={new Date()}
                rangeColors={["#4CAF50"]}
              />
              <button
                className="w-full bg-green-500 text-white p-2 rounded mt-2"
                onClick={() => setShowDatePop(false)}
              >
                Done
              </button>
            </div>
          )}

          {/* Guest & Room */}
          <p
            onClick={() => setShowPop(!showPop)}
            className="bg-white flex justify-center items-center w-60 cursor-pointer relative"
          >
            {guest} Guest, {room} Room
          </p>
          {showPop && (
            <div className="absolute top-16 right-28 bg-white shadow-lg p-4 rounded-lg w-40 z-50">
              <div className="flex justify-between mb-3">
                <span>Guest</span>
                <div className="flex gap-2 items-center">
                  <button onClick={() => guest > 1 && setGuest(guest - 1)} className="border px-2">-</button>
                  <span>{guest}</span>
                  <button onClick={() => guest < 10 && setGuest(guest + 1)} className="border px-2">+</button>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Room</span>
                <div className="flex gap-2 items-center">
                  <button onClick={() => room > 1 && setRoom(room - 1)} className="border px-2">-</button>
                  <span>{room}</span>
                  <button onClick={() => room < 10 && setRoom(room + 1)} className="border px-2">+</button>
                </div>
              </div>
            </div>
          )}

          {/* Search Button */}
          <button
            onClick={() => handleSearchClick(search)}
            className="bg-green-400 w-30 text-white text-xl cursor-pointer hover:bg-green-500"
          >
            Search
          </button>
        </div>
      </div>

      {/* ================= TASKS ================= */}
      {tasks.length > 0 && (
        <div className="p-4 bg-gray-100">
          <h2 className="text-xl font-bold mb-2">Tasks from API:</h2>
          <ul className="list-disc pl-5">
            {tasks.map((task) => (
              <li key={task.id}>{task.title} - {task.completed ? "Done" : "Pending"}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ================= BODY BANNERS ================= */}
      <div className="bg-white h-250 flex items-center justify-evenly flex-col">
        <img onClick={()=>navigate('/hotels')} className="h-70 w-310 cursor-pointer" src="https://assets.oyoroomscdn.com/cmsMedia/1606e8a0-685f-4c31-8319-4b592f1ca086.jpg" alt="" />
        <img onClick={()=>navigate('/hotels')} className="h-70 w-310 cursor-pointer" src="https://assets.oyoroomscdn.com/cmsMedia/33e8565d-f803-49ab-9269-a4bc97cd835d.jpg" alt="" />

        <div className="h-28 w-310 border border-gray-300 flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://media.istockphoto.com/id/1323529010/vector/fire-vector-isolated.jpg?s=612x612&w=0&k=20&c=ta6bKkXZDuqy2H3tRhR79sSl_-fdGhKyoenbbjEr3l0=" alt="" height={80} width={80} />
            <div>
              <p className="text-2xl">Get access to exclusive deals</p>
              <p className="text-gray-600">Only the best deals reach your inbox</p>
            </div>
          </div>
          <input className="mr-3 border border-gray-300 relative left-50  text-gray-500 p-2 w-80 rounded-xl h-13" type="text" placeholder="e.g., alen@email.com" />
          <button className="mr-3 bg-red-500 h-12 w-29 text-white cursor-pointer rounded-xl hover:bg-red-600">Notify Me</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
