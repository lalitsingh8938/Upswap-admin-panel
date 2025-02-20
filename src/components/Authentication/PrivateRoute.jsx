// import React, { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "./AuthContext";

// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const location = useLocation();

//   if (isAuthenticated === null) {
//     return <div>Loading...</div>;
//   }

//   return isAuthenticated ? (
//     children
//   ) : (
//     <Navigate to="/login" state={{ from: location }} />
//   );
// };

// export default PrivateRoute;

// import { Navigate } from "react-router-dom";
// import { useAuth } from "./AuthContext"; // Custom hook for authentication context

// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth(); // Assuming this returns the authentication state
  
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />; // Redirect to login if not authenticated
//   }
  
//   return children; // Allow access to the child component if authenticated
// };

// export default PrivateRoute;


import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;