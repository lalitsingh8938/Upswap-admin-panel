// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { X } from "lucide-react";
// import { IoMdLogOut } from "react-icons/io";

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeItem, setActiveItem] = useState(location.pathname);

//   const menuItems = [
//     { name: "KYC Request", icon: "Purchase Order.png", path: "/KYCRequest" },
//     { name: "Dashboard", icon: "Control Panel.png", path: "/BusinessDetails" },
//     { name: "Orders", icon: "Add Shopping Cart (1).png", path: "/NewVendor" },
//     { name: "Payment", icon: "Receive Dollar.png", path: "/PdfViewer" },
//     { name: "Vendor Support", icon: "Help.png", path: "/vendor-support" },
//     {
//       name: "User Support",
//       icon: "Customer Support.png",
//       path: "/user-support",
//     },
//     { name: "Vendors", icon: "Small Business.png", path: "/Vendors" },
//     { name: "Users", icon: "Users.png", path: "/Users" },
//     { name: "Notification", icon: "Alarm (1).png", path: "/notification" },
//     { name: "Settings", icon: "Settings.png", path: "/settings" },
//     { name: "Logout", icon: "<IoMdLogOut />", path: "/Logout" },
//   ];

//   const handleItemClick = (item) => {
//     setActiveItem(item.path);
//     navigate(item.path);
//   };

//   useEffect(() => {
//     setActiveItem(location.pathname);
//   }, [location.pathname]);

//   return (
//     <div
//       className={`fixed top-0 left-0 h-full bg-black text-white w-72 p-6 transform transition-transform duration-500 ${
//         isOpen ? "translate-x-0" : "-translate-x-72"
//       } md:translate-x-0`}
//     >
//       <button
//         className="absolute top-4 right-4 md:hidden"
//         onClick={toggleSidebar}
//       >
//         <X className="w-6 h-6 text-white" />
//       </button>

//       <div className="flex justify-center mb-6">
//         <img src="UPswap svg 1 1.png" className="w-24 h-auto" alt="logo" />
//       </div>
//       <div className="justify-start">
//         <img src="Line 3.png" className="w-full" alt="divider" />
//       </div>

//       <ul className="space-y-2 px-8 mt-6">
//         {menuItems.map((item) => (
//           <li
//             key={item.name}
//             onClick={() => handleItemClick(item)}
//             className={`flex items-center space-x-3 cursor-pointer px-3 py-2 rounded-md transition ${
//               activeItem === item.path
//                 ? "bg-[#FC7444] text-white"
//                 : "hover:bg-gray-700"
//             }`}
//           >
//             <img src={item.icon} className="w-5 h-5" alt="icon" />
//             <span className="text-base">{item.name}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
// Compare this snippet from src/components/Notification.jsx:
// import { useState } from "react";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { IoMdClose } from "react-icons/io";
// 
// const Notification = ({ isOpen, toggleNotification }) => {
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       title: "New order received",
//       message: "Order ID - #123456",
//     },
//     {
//       id: 2,
//       title: "Payment received",
//       message: "Payment ID - #123456",
//     },
//     {
//       id: 3,
//       title: "New vendor registered",
//       message: "Vendor - John Doe",
//     },
//     {
//       id: 4,
//       title: "Order dispatched",
//       message: "Order ID - #123456",
//     },
//     {
//       id: 5,
//       title: "New order received",
//       message: "Order ID - #123456",
//     },
//   ]);
// 
//   return (
//     <div
//       className={`fixed top-0 right-0 h-full bg-white text-gray-800 w-80 p-6 transform transition-transform duration-500 ${
//         isOpen ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       <button
//         className="absolute top-4 right-4"
//         onClick={toggleNotification}
//       >
//         <IoMdClose className="w-6 h-6 text-gray-800" />
//       </button>
// 
//       <h2 className="text-lg font-semibold mb-4">Notifications</h2>
// 
//       <div className="space-y-4">
//         {notifications.map((notification) => (
//           <div
//             key={notification.id}
//             className="flex justify-between items-start p-4 border border-gray-200 rounded-lg"
//           >
//             <div>
//               <h3 className="text-lg font-semibold">{notification.title}</h3>
//               <p className="text-sm text-gray-600">{notification.message}</p>
//             </div>
//             <BsThreeDotsVertical className="cursor




import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { X, LogOut } from "lucide-react";
import { AuthContext } from "./AuthContext"; // AuthContext import karein

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
    { name: "User Support", icon: "Customer Support.png", path: "/user-support" },
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
