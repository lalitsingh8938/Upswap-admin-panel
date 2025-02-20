import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="bg-white border py-6 px-4">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* ✅ Search Bar */}
        <div className="flex items-center flex-1 justify-center relative px-2 sm:px-4 md:px-6 lg:px-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-4 py-2 border border-gray-300 rounded-xl outline-none pl-10"
          />
          <CiSearch className="absolute right-80 lg:max-w-xl top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        {/* ✅ Icons Section */}
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 cursor-pointer">
          <img src="Chat.png" className="w-5 h-5" alt="Chat" />
          <img src="Notification.png" className="w-6 h-6" alt="Notifications" />
          <img
            src="Group 1.png"
            className="w-8 h-8 rounded-full"
            alt="User Profile"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
