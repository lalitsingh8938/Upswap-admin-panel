import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

const stores = [
  {
    name: "Vinod Home Decor",
    location: "Karol Bagh, Delhi",
    date: "28/Jan/2025, 13:42 pm",
    status: "Approved",
    image: "deoration-pieces_1282251-4973 1.png",
  },
  {
    name: "Anmol Kitchen Utensils",
    location: "Noida",
    date: "28/Jan/2025, 11:25 am",
    status: "Approved",
    image: "steptodown.com834921 1.png",
  },
  {
    name: "Kamal Prashad Mobile Hub",
    location: "New Delhi",
    date: "23/Jan/2025, 15:20 pm",
    status: "Approved",
    image: "smartphones-shopping-bags 1.png",
  },
  {
    name: "Mohanlal Bakery Shop",
    location: "Mayur Bihar, Delhi",
    date: "23/Jan/2025, 13:10 pm",
    status: "Approved",
    image: "delicious-donut-shop-ai-generated 1.png",
  },
  {
    name: "Pizza N Pizza",
    location: "Mathura",
    date: "12/Jan/2025, 11:02 am",
    status: "Approved",
    image: "side-view-pizza-with-chopped-pepper-board-cookware 1.png",
  },
  {
    name: "Shri ji Garments",
    location: "Tilak Nagar, Noida",
    date: "03/Jan/2025, 14:30 pm",
    status: "Approved",
    image: "hot-latte-coffee-white-cup-table 1.png",
  },
  {
    name: "Sagar Ratna Bakery Shop",
    location: "Mayur Bihar, New Delhi",
    date: "23/Jan/2025, 13:10 pm",
    status: "Approved",
    image: "delicious-donut-shop-ai-generated 1.png",
  },
];

const uniqueStores = stores.filter(
  (store, index, self) => index === self.findIndex((s) => s.name === store.name)
);

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState(null);
};

export default function StoreList() {
  const [storeStatuses, setStoreStatuses] = useState(
    uniqueStores.reduce(
      (acc, store) => ({ ...acc, [store.name]: store.status }),
      {}
    )
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedStores, setSelectedStores] = useState([]);
  const [favoriteStores, setFavoriteStores] = useState({});

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedStores(uniqueStores.map((store) => store.name));
    } else {
      setSelectedStores([]);
    }
  };

  const handleSelectStore = (storeName) => {
    setSelectedStores((prev) =>
      prev.includes(storeName)
        ? prev.filter((name) => name !== storeName)
        : [...prev, storeName]
    );
  };

  const toggleFavorite = (storeName) => {
    setFavoriteStores((prev) => ({
      ...prev,
      [storeName]: !prev[storeName],
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="flex-1 md:ml-72 px-6 py-6">
        <button
          className="md:hidden flex items-center text-gray-600 mb-4"
          onClick={toggleSidebar}
        >
          <Menu className="w-6 h-6 mr-2" />
          Menu
        </button>

        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center mb-4 ml-4">
            <input
              type="checkbox"
              checked={selectedStores.length === uniqueStores.length}
              onChange={handleSelectAll}
              className="mr-4 w-4 h-4"
            />
            <label className="text-lg font-semibold">Select all</label>
          </div>

          {uniqueStores.map((store) => (
            <div
              key={store.name}
              className="flex flex-col sm:flex-row items-center justify-between p-4 border border-gray-300 shadow-md rounded-lg bg-white"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedStores.includes(store.name)}
                  onChange={() => handleSelectStore(store.name)}
                  className="mr-4 w-4 h-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{store.name}</h3>
                  <p className="text-sm text-gray-600">
                    Location - {store.location}
                  </p>
                  <p className="text-sm text-gray-500">
                    Date and Time (Applied for KYC) - {store.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <button className="bg-[#FC7444] text-white px-4 py-2 rounded-md">
                  Open Application
                </button>
                <div>
                  <img
                    src="Line 26.png"
                    className="h-20 opacity-35"
                    alt="line"
                  />
                </div>
                <Heart
                  className="text-[#FC7444] cursor-pointer"
                  onClick={() => toggleFavorite(store.name)}
                  fill={favoriteStores[store.name] ? "#FC7444" : "none"}
                />
                <div>
                  <img
                    src="Line 26.png"
                    className="h-20 opacity-35"
                    alt="line"
                  />
                </div>
                <div className="relative">
                  <select
                    value={storeStatuses[store.name]}
                    onChange={(e) =>
                      setStoreStatuses((prev) => ({
                        ...prev,
                        [store.name]: e.target.value,
                      }))
                    }
                    className="rounded-md px-3 py-1 focus:outline-none bg-gray-500 text-white appearance-none cursor-pointer [&>option]:p-2 [&>option:hover:nth-child(2)]:bg-green-500 [&>option:hover:nth-child(3)]:bg-blue-500 [&>option:hover:nth-child(4)]:bg-red-500"
                  >
                    {/* <option value="" className="bg-gray-500">Select Status</option> */}
                    <option
                      value="Approved"
                      className={`${
                        storeStatuses[store.name] === "Approved"
                          ? "bg-green-500"
                          : "bg-gray-500"
                      }`}
                    >
                      Approved
                    </option>
                    <option
                      value="Pending"
                      className={`${
                        storeStatuses[store.name] === "Pending"
                          ? "bg-blue-500"
                          : "bg-gray-500"
                      }`}
                    >
                      Pending
                    </option>
                    <option
                      value="Rejected"
                      className={`${
                        storeStatuses[store.name] === "Rejected"
                          ? "bg-red-500"
                          : "bg-gray-500"
                      }`}
                    >
                      Rejected
                    </option>
                  </select>
                  {storeStatuses[store.name] && (
                    <div
                      className={`absolute top-0 left-0 right-0 bottom-0 pointer-events-none rounded-md ${
                        storeStatuses[store.name] === "Approved"
                          ? "bg-green-500"
                          : storeStatuses[store.name] === "Pending"
                          ? "bg-yellow-500"
                          : storeStatuses[store.name] === "Rejected"
                          ? "bg-red-500"
                          : "bg-gray-500"
                      }`}
                    >
                      <span className="flex items-center justify-between px-3 py-1 text-white">
                        {storeStatuses[store.name] || "Select Status"}
                      </span>
                    </div>
                  )}
                </div>
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
