// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { RiLogoutCircleLine } from "react-icons/ri";
// import { AuthContext } from "./AuthContext"; // AuthContext ka import karen
// import { toast } from "react-toastify";

// const LogoutButton = () => {
//   const navigate = useNavigate();
//   const { logout } = useContext(AuthContext); // AuthContext se logout function lein

//   const handleLogout = async () => {
//     try {
//       const accessToken = localStorage.getItem("access_token");
//       const refreshToken = localStorage.getItem("refresh_token");
  
//       if (!accessToken || !refreshToken) {
//         navigate("/login"); // Redirect to login page if tokens are missing
//         return;
//       }
  
//       const response = await fetch("https://api.upswap.app/api/logout/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//         body: JSON.stringify({ refresh_token: refreshToken }), // Use 'refresh' as the key
//       });
  
//       if (response.ok) {
//         // On successful logout, clear localStorage
//         logout(); // Call the logout function from AuthContext
//         toast.success("logout succesful!")
//         confirm.success("are you sure")
//         navigate("/login"); // Redirect to login page after logout
//       } else {
//         console.error("Logout failed.");
//       }
//     } catch (error) {
//       console.error("Error during logout:", error);
//     }
//   };
  

//   return (
//     <div
//       className="flex items-center cursor-pointer w-full p-1 h-10 mt-3"
//       onClick={handleLogout}
//     >
//       <RiLogoutCircleLine />
//       <p className="text-black text-sm ml-3">Logout</p>
//     </div>
//   );
// };

// export default LogoutButton;
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import { AuthContext } from "./AuthContext"; // AuthContext ka import karen
import { toast } from "react-toastify";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext); // AuthContext se logout function lein

  const handleLogout = async () => {
    // Use the native confirm method for confirmation dialog
    if (!window.confirm("Are you sure you want to logout?")) {
      return; // If user cancels the confirmation, exit the function
    }

    try {
      const accessToken = localStorage.getItem("access_token");
      const refreshToken = localStorage.getItem("refresh_token");
  
      if (!accessToken || !refreshToken) {
        navigate("/login"); // Redirect to login page if tokens are missing
        return;
      }

      const response = await fetch("https://api.upswap.app/api/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ refresh_token: refreshToken }), // Use 'refresh' as the key
      });

      if (response.ok) {
        // On successful logout, clear localStorage
        logout(); // Call the logout function from AuthContext
        toast.success("Logout successful!"); // Show success toast
        navigate("/login"); // Redirect to login page after logout
      } else {
        console.error("Logout failed.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div
      className="flex items-center cursor-pointer w-full p-1 h-10 mt-3"
      onClick={handleLogout}
    >
      <RiLogoutCircleLine />
      <p className="text-black text-sm ml-3">Logout</p>
    </div>
  );
};

export default LogoutButton;
