import { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const CardList = () => {
  const [visiblePhones, setVisiblePhones] = useState({});
  const [openMenus, setOpenMenus] = useState({});
  const menuRefs = useRef({});

  const baseData = [
    {
      id: 1,
      name: "Ram Foods and Sweets",
      category: "Confectionary",
      location: "Holigate, Mathura, U.P.",
      phone: "+91 8938900984",
      image: "product_image.png",
      rating: "4.2 (50 ratings)",
    },
  ];

  const data = Array.from({ length: 10 }, (_, index) => ({
    ...baseData[0],
    id: index + 1,
  }));

  const togglePhoneVisibility = (id) => {
    setVisiblePhones((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleMenu = (id) => {
    setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleClickOutside = (event) => {
    Object.keys(menuRefs.current).forEach((id) => {
      if (
        openMenus[id] &&
        menuRefs.current[id] &&
        !menuRefs.current[id].contains(event.target)
      ) {
        setOpenMenus((prev) => ({ ...prev, [id]: false }));
      }
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenus]);

  return (
    <div className="grid grid-cols-1 bg-gray-100 justify-center items-center md:ml-72 md:grid-cols-3 gap-8 p-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative border rounded-lg p-4 shadow-md bg-white"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">
                Category - {item.category}
              </p>
              <p className="text-sm flex items-center gap-1 mt-2">
                <img src="Map (1).png" className="w-3 h-3" alt="icon" />{" "}
                {item.location}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm flex items-center gap-1">
                  📞 {visiblePhones[item.id] ? item.phone : "*******789"}
                </span>
                <button onClick={() => togglePhoneVisibility(item.id)}>
                  {visiblePhones[item.id] ? "👁️" : "🔒"}
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-lg justify-center items-center mt-6"
              />
              <BsThreeDotsVertical
                onClick={() => toggleMenu(item.id)}
                className="absolute top-0 -right-3 w-6 h-5 cursor-pointer"
              />
              {openMenus[item.id] && (
                <div
                  ref={(el) => (menuRefs.current[item.id] = el)}
                  className="absolute right-0 w-40 bg-white border rounded shadow-md z-10"
                  style={{ top: "30px" }}
                >
                  <button className="block px-4 py-2 text-left w-full hover:bg-gray-100">
                    Add to Wishlist
                  </button>
                  <button className="block px-4 py-2 text-left w-full hover:bg-gray-100">
                    Block
                  </button>
                  <button className="block px-4 py-2 text-left w-full hover:bg-gray-100">
                    Unblock
                  </button>
                  <button className="block px-4 py-2 text-left w-full hover:bg-gray-100">
                    Select
                  </button>
                </div>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-500">⭐ {item.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
