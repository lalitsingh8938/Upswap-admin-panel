import { useState } from "react";

const User = () => {
  const [visiblePhones, setVisiblePhones] = useState({});

  const baseData = [
    {
      id: 1,
      name: "Akhil Sharma",
      gender: "Male",
      email: "akhilsharma@gmail.com",
      location: "Holigate, Mathura, U.P.",
      phone: "+91 8938900984",
      image: "User.png",
      rating: "4.2 (162 ratings)",
    },
  ];

  const data = Array.from({ length: 10 }, (_, index) => ({
    ...baseData[0],
    id: index + 1,
  }));

  const togglePhoneVisibility = (id) => {
    setVisiblePhones((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
              <p className="text-sm text-gray-600">Gender - {item.gender}</p>
              <p className="text-sm text-gray-600">Email - {item.email}</p>
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
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 object-cover rounded-lg justify-center items-center mt-6"
            />
          </div>
          <p className="text-sm text-gray-500">⭐ {item.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default User;
