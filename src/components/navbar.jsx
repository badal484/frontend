import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/");
  };

  return (
    <div className="flex flex-wrap justify-between items-center border-b px-4">
      <div className="h-20 flex items-center text-4xl font-serif font-bold">
        <Link to="/" className="select-none">OYH</Link>
      </div>

      <div className="flex items-center gap-3">
        <Link to="/list-property" className="text-sm">
          <div className="text-md h-14 px-4 flex flex-col justify-center items-center border rounded">
            List Your Property
            <p className="text-xs">Start earning in 30 min</p>
          </div>
        </Link>

        <a href="tel:6204646300" className="no-underline">
          <div className="h-14 px-4 flex items-center border rounded">
            <div
              className="h-8 w-8 rounded-full mr-3 bg-cover bg-center"
              style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0GZ2dKfnpLXotVEV8UvNGKTxfFSfcb280A&s')" }}
            />
            Call us to Book now
          </div>
        </a>
      </div>

      <div className="relative" ref={dropdownRef}>
        <div className="h-14 flex items-center gap-3 border rounded px-3 ml-4">
          <div
            className="h-10 w-10 rounded-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/97/21/05/972105c5a775f38cf33d3924aea053f1.jpg')" }}
          />

          {isLoggedIn ? (
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-left font-semibold focus:outline-none"
            >
              <div className="flex items-center gap-2">
                <Link to="/hotels" className="px-3 py-1 rounded border text-center">PG's</Link>
                <span className="hidden sm:inline">Welcome,</span>
                <span>{user?.username || "User"}</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" />
                </svg>
              </div>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/hotels" className="px-3 py-1 rounded border text-center">PG's</Link>
              <Link to="/login" className="px-3 py-1 rounded border text-center">Login</Link>
              <Link to="/signup" className="px-3 py-1 rounded border text-center">Signup</Link>
            </div>
          )}
        </div>

        {open && isLoggedIn && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
            <Link to="/help" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setOpen(false)}>
              Help
            </Link>
            <Link to="/mybookings" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setOpen(false)}>
              My Bookings
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
