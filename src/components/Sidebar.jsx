// // import { useState } from "react";

// // const Sidebar = () => {
// //   return (
// //     <div className="w-72 h-screen bg-black text-white p-6 fixed">
// //       {/* Logo */}
// //       <div className="flex justify-center mb-6 ">
// //         <img src="UPswap svg 1 1.png" className="w-24 h-auto" alt="logo" />
// //       </div>
// //       <div className="justify-start">
// //         <img src="Line 3.png" className="w-screen" alt="logo" />
// //       </div>

// //       {/* Sidebar Menu */}
// //       <ul className="space-y-4 items-center justify-center text-center ml-7 mt-9">
// //         <li className="flex items-center space-x-3 cursor-pointer">
// //           <img src="Control Panel.png" className="w-4 h-4" alt="icon" />
// //           <span className="text-base">KYC Request</span>
// //         </li>
// //         <li className="flex items-center space-x-3 cursor-pointer">
// //           <img src="Control Panel.png" className="w-4 h-4" alt="icon" />
// //           <span className="text-base">Dashboard</span>
// //         </li>

// //         <li className="flex items-center space-x-3 cursor-pointer">
// //           <img src="Add Shopping Cart (1).png" className="w-4 h-4" alt="icon" />
// //           <span className="text-base">Orders</span>
// //         </li>

// //         <li className="flex items-center space-x-3 cursor-pointer">
// //           <img src="Receive Dollar.png" className="w-4 h-4" alt="icon" />
// //           <span className="text-base">Payment</span>
// //         </li>

// //         <li className="flex items-center space-x-3 cursor-pointer">
// //           <img src="Help.png" className="w-4 h-4" alt="icon" />
// //           <span className="text-base">Vendor Support</span>
// //         </li>

// //         <li className="flex items-center space-x-3 cursor-pointer">
// //           <img src="Customer Support.png" className="w-4 h-4" alt="icon" />
// //           <span className="text-base">User Support</span>
// //         </li>
// //         <li className="flex items-center space-x-3 cursor-pointer">
// //           <img src="Small Business.png" className="w-4 h-4" alt="icon" />
// //           <span className="text-base">Vendors</span>
// //         </li>
// //         <li className="flex items-center space-x-3 cursor-pointer">
// //           <img src="Users.png" className="w-4 h-4" alt="icon" />
// //           <span className="text-base">Users</span>
// //         </li>

// //         <li className="flex items-center space-x-3 cursor-pointer">
// //           <img src="Alarm (1).png" className="w-4 h-4" alt="icon" />
// //           <span className="text-base">Notification</span>
// //         </li>

// //         <li className="flex items-center space-x-3 cursor-pointer">
// //           <img src="Settings.png" className="w-4 h-4 " alt="icon" />
// //           <span className="text-base">Settings</span>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Sidebar;

// import { useState } from "react";

// const Sidebar = () => {
//   const [activeItem, setActiveItem] = useState("KYC Request");

//   const menuItems = [
//     { name: "KYC Request", icon: "Control Panel.png" },
//     { name: "Dashboard", icon: "Control Panel.png" },
//     { name: "Orders", icon: "Add Shopping Cart (1).png" },
//     { name: "Payment", icon: "Receive Dollar.png" },
//     { name: "Vendor Support", icon: "Help.png" },
//     { name: "User Support", icon: "Customer Support.png" },
//     { name: "Vendors", icon: "Small Business.png" },
//     { name: "Users", icon: "Users.png" },
//     { name: "Notification", icon: "Alarm (1).png" },
//     { name: "Settings", icon: "Settings.png" },
//   ];

//   return (
//     <div className="w-72 h-screen bg-black text-white p-6 fixed">
//       {/* Logo */}
//       <div className="flex justify-center mb-6">
//         <img src="UPswap svg 1 1.png" className="w-24 h-auto" alt="logo" />
//       </div>

//       {/* Sidebar Menu */}
//       <ul className="space-y-4">
//         {menuItems.map((item) => (
//           <li
//             key={item.name}
//             className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
//               activeItem === item.name
//                 ? "bg-orange-500 text-white border border-blue-400"
//                 : "hover:bg-blue-800"
//             }`}
//             onClick={() => setActiveItem(item.name)}
//           >
//             <img src={item.icon} className="w-4 h-4" alt="icon" />
//             <span className="text-base">{item.name}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
// Sidebar.js

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const menuItems = [
    { name: "KYC Request", icon: "Purchase Order.png", path: "/KYCRequest" },
    { name: "Dashboard", icon: "Control Panel.png", path: "/Dashboard" },
    { name: "Orders", icon: "Add Shopping Cart (1).png", path: "/orders" },
    { name: "Payment", icon: "Receive Dollar.png", path: "/payment" },
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
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.path);
    navigate(item.path);
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
            <img src={item.icon} className="w-5 h-5" alt="icon" />
            <span className="text-base">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
