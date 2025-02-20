import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { X, LogOut } from "lucide-react";
import { AuthContext } from "../Authentication/AuthContext"; // AuthContext import karein
import { toast } from "react-toastify";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useContext(AuthContext); // Context se logout function lein
  const [activeItem, setActiveItem] = useState(location.pathname);

  const menuItems = [
    { name: "KYC Request", icon: "Purchase Order.png", path: "/KYCRequest" },
    { name: "Dashboard", icon: "Control Panel.png", path: "/BusinessDetails" },
    { name: "Orders", icon: "Add Shopping Cart (1).png", path: "/NewVendor" },
    { name: "Payment", icon: "Receive Dollar.png", path: "/PdfViewer" },
    { name: "Vendor Support", icon: "Help.png", path: "/vendor-support" },
    {
      name: "User Support",
      icon: "Customer Support.png",
      path: "/user-support",
    },
    { name: "Vendors", icon: "Small Business.png", path: "/Vendors" },
    { name: "Users", icon: "Users.png", path: "/Users" },
    { name: "Notification", icon: "Alarm (1).png", path: "/notification" },
    { name: "Settings", icon: "Settings.png", path: "/settings" },
    { name: "Logout", icon: <LogOut className="w-5 h-5" />, path: "/logout" },
  ];

  const handleItemClick = async (item) => {
    if (item.name === "Logout") {
      await handleLogout();
    } else {
      setActiveItem(item.path);
      navigate(item.path);
    }
  };

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
      const refresh = localStorage.getItem("refresh_token");

      if (!accessToken || !refresh) {
        navigate("/login");
        return;
      }

      const response = await fetch("https://api.upswap.app/api/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ refresh_token: refresh }),
      });

      if (response.ok) {
        logout(); // Context-based logout call karein

        navigate("/login");
        // toast.success("Logout Successful!");
        // confirm.success("Logout Successfull!")
      } else {
        console.error("Logout failed.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-black text-white w-72 p-6 transform transition-transform duration-500 ${
        isOpen ? "translate-x-0" : "-translate-x-72"
      } md:translate-x-0`}
    >
      <button
        className="absolute top-4 right-4 md:hidden"
        onClick={toggleSidebar}
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <div className="flex justify-center mb-6">
        <img src="UPswap svg 1 1.png" className="w-24 h-auto" alt="logo" />
      </div>
      <div className="justify-start">
        <img src="Line 3.png" className="w-full" alt="divider" />
      </div>

      <ul className="space-y-2 px-8 mt-6">
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => handleItemClick(item)}
            className={`flex items-center space-x-3 cursor-pointer px-3 py-2 rounded-md transition ${
              activeItem === item.path
                ? "bg-[#FC7444] text-white"
                : "hover:bg-gray-700"
            }`}
          >
            {typeof item.icon === "string" ? (
              <img src={item.icon} className="w-5 h-5" alt="icon" />
            ) : (
              item.icon
            )}
            <span className="text-base">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
