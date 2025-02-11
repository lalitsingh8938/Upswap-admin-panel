import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import { AuthContext } from "./AuthContext"; // AuthContext ka import karen

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext); // AuthContext se logout function lein

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
      const refreshToken = localStorage.getItem("refresh_token");

      if (!accessToken || !refreshToken) {
        navigate("/login"); // Agar tokens nahi hain, to login page par redirect karen
        return;
      }

      const response = await fetch("https://api.upswap.app/api/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });

      if (response.ok) {
        // Logout successful hone par localStorage ko clear karen
        logout(); // AuthContext ka logout function call karen
        navigate("/login"); // Logout ke baad login page par redirect karen
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
