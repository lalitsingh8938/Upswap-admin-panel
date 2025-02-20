// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Component mount hone par localStorage se data retrieve karein
//     const token = localStorage.getItem("access_token");
//     const userData = localStorage.getItem("user");

//     if (token && userData) {
//       setIsAuthenticated(true);
//       setUser(JSON.parse(userData));
//     } else {
//       setIsAuthenticated(false);
//     }
//   }, []);

//   const login = (token, userData) => {
//     localStorage.setItem("access_token", token);
//     localStorage.setItem("user", JSON.stringify(userData));
//     setIsAuthenticated(true);
//     setUser(userData);
//   };

//   const logout = () => {
//     localStorage.removeItem("access_token");
//     localStorage.removeItem("user");
//     setIsAuthenticated(false);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Component mount hone par localStorage se data retrieve karein
    const token = localStorage.getItem("access_token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("access_token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null);
//   useEffect(() => {
//     const accessToken = localStorage.getItem("access_token");
//     if (accessToken) {
//       const tokenExpiration = JSON.parse(atob(accessToken.split(".")[1]))?.exp;
//       if (tokenExpiration && Date.now() >= tokenExpiration * 1000) {
//         logout(); // Agar token expire ho gaya hai, to logout karen
//       } else {
//         setIsAuthenticated(true); // User ko authenticated set karen
//       }
//     } else {
//       setIsAuthenticated(false); // Agar token nahi hai, to unauthenticated set karen
//     }
//   }, []);
  
//   const login = (token) => {
//     localStorage.setItem("access_token", token);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem("access_token");
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };