// src/AuthProvider.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

// Create context
export const AuthContext = createContext();

// Export custom hook
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedUsername = localStorage.getItem("username");

    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUser({ username: storedUsername });
    }
  }, []);

  const login = (userData, accessToken, refreshToken) => {
    setIsLoggedIn(true);
    setUser(userData);

    // Save tokens
    localStorage.setItem("accessToken", accessToken);
    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
    }

    // Save username for persistence
    localStorage.setItem("username", userData.username);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;






