// import React from "react";

// const BusinessDetails = () => {
//   return (
//     <div className="container mx-auto p-6 bg-white min-h-screen border-t-2 ">
//       {/* Personal & Business Details */}
//       <div className="bg-gray-100 p-6 rounded-lg shadow-md md:ml-72">
//         <h2 className="text-xl font-semibold mb-4">
//           Personal & Business Details
//         </h2>
//         <div className="grid grid-cols-3 gap-4">
//           <div>
//             <label className="block font-medium">First name</label>
//             <input
//               type="text"
//               value="Vinod"
//               className="w-full border rounded-lg p-2"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Middle name</label>
//             <input
//               type="text"
//               value="Kumar"
//               className="w-full border rounded-lg p-2"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Business Email ID</label>
//             <input
//               type="text"
//               value="vinodhomeadepieces@gmail.com"
//               className="w-full border rounded-lg p-2"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Phone no.</label>
//             <input
//               type="text"
//               value="+91 1234567890"
//               className="w-full border rounded-lg p-2"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block font-medium">
//               Business Establishment Year
//             </label>
//             <input
//               type="text"
//               value="2017"
//               className="w-full border rounded-lg p-2"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Business Hours</label>
//             <input
//               type="text"
//               value="10:00 am - 08:00 pm (Friday closed)"
//               className="w-full border rounded-lg p-2"
//               readOnly
//             />
//           </div>
//         </div>
//         {/* Profile and Documents */}
//         <div className="grid grid-cols-3 gap-4 bg-gray-100 p-6 rounded-lg">
//           {/* Profile Picture */}
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <label className="block font-medium mb-2">Profile Picture</label>
//             <div className="bg-gray-100 p-4 rounded-lg flex justify-center items-center">
//               <img
//                 src="/User.png"
//                 alt="Profile"
//                 className="h-20 w-20 rounded-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Business Description */}
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <label className="block font-medium mb-2">
//               Business Description
//             </label>
//             <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700">
//               It serves as an introduction to potential customers, investors, or
//               partners, explaining what the business does and why it stands out.
//             </div>
//           </div>

//           {/* Uploaded Images */}
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <label className="block font-medium mb-2">Uploaded Images</label>
//             <div className="bg-gray-100 p-4 rounded-lg flex gap-2">
//               <img
//                 src="/upload2.png"
//                 alt="img1"
//                 className="h-16 w-16 object-cover rounded-md"
//               />
//               <img
//                 src="/upload1.png"
//                 alt="img2"
//                 className="h-16 w-16 object-cover rounded-md"
//               />
//               <img
//                 src="/uploaded3.png"
//                 alt="img3"
//                 className="h-16 w-16 object-cover rounded-md"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Services / Products provided by Vendor */}
//       <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 md:ml-72">
//         <h2 className="text-xl font-semibold mb-4">
//           Services / Products provided by Vendor
//         </h2>
//         <div className="grid grid-cols-3 gap-4">
//           {[1, 2, 3].map((_, index) => (
//             <div key={index} className="border p-4 rounded-lg shadow bg-white">
//               <p>
//                 <strong>Name:</strong> Ceramic flower vases
//               </p>
//               <p>
//                 <strong>Category:</strong> Home Decor
//               </p>
//               <p>
//                 <strong>Description:</strong> Blue textured cylindrical
//               </p>
//               <p>
//                 <strong>Price:</strong> ₹650/per piece
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Bank Details */}
//       <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 md:ml-72">
//         <h2 className="text-xl font-semibold mb-4">Bank Details</h2>
//         <div className="grid grid-cols-3 gap-4">
//           <div>
//             <label className="block font-medium">Bank Account Number</label>
//             <input
//               type="text"
//               value="123456789032"
//               className="w-full border rounded-lg p-2"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Bank Name</label>
//             <input
//               type="text"
//               value="HDFC Bank"
//               className="w-full border rounded-lg p-2"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block font-medium">IFSC Code</label>
//             <input
//               type="text"
//               value="HDFC0001234"
//               className="w-full border rounded-lg p-2"
//               readOnly
//             />
//           </div>
//         </div>
//       </div>
//       {/* Location Details */}
//       <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 md:ml-72">
//         <h2 className="text-xl font-semibold mb-4">Location Details</h2>
//         <div className="grid grid-cols-3 gap-4">
//           <div>
//             <label className="block font-medium">Country</label>
//             <input
//               type="text"
//               value="India"
//               className="w-full border rounded-lg p-2"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block font-medium">State</label>
//             <input
//               type="text"
//               value="Uttar Pradesh"
//               className="w-full border rounded-lg p-2"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Street Address</label>
//             <input
//               type="text"
//               value="Shop no. 63, Mayur Bihar, Greater Noida"
//               className="w-full border rounded-lg p-2"
//               readOnly
//             />
//           </div>
//         </div>
//       </div>
//       {/* Approval Status */}
//       <div className="flex justify-end mt-6">
//         <button className="bg-red-500 text-white px-4 py-2 rounded">
//           Approved
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BusinessDetails;

import React from "react";

const BusinessDetails = () => {
  return (
    <div className="container mx-auto p-6 bg-white min-h-screen border-t-2">
      {/* Personal & Business Details */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md md:ml-72">
        <h2 className="text-xl font-semibold mb-4">
          Personal & Business Details
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block font-medium">First name</label>
            <input
              type="text"
              value="Vinod"
              className="w-full border rounded-lg p-2"
              readOnly
            />
          </div>
          <div>
            <label className="block font-medium">Middle name</label>
            <input
              type="text"
              value="Kumar"
              className="w-full border rounded-lg p-2"
              readOnly
            />
          </div>
          <div>
            <label className="block font-medium">Business Email ID</label>
            <input
              type="text"
              value="vinodhomeadepieces@gmail.com"
              className="w-full border rounded-lg p-2"
              readOnly
            />
          </div>
          <div>
            <label className="block font-medium">Phone no.</label>
            <input
              type="text"
              value="+91 1234567890"
              className="w-full border rounded-lg p-2"
              readOnly
            />
          </div>
          <div>
            <label className="block font-medium">
              Business Establishment Year
            </label>
            <input
              type="text"
              value="2017"
              className="w-full border rounded-lg p-2"
              readOnly
            />
          </div>
          <div>
            <label className="block font-medium">Business Hours</label>
            <input
              type="text"
              value="10:00 am - 08:00 pm (Friday closed)"
              className="w-full border rounded-lg p-2"
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 bg-gray-100 p-6 rounded-lg md:ml-72">
        {/* Profile Picture */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <label className="block font-medium mb-2">Profile Picture</label>
          <div className="bg-gray-100 p-4 rounded-lg flex justify-center items-center">
            <img
              src="/User.png"
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Business Description */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <label className="block font-medium mb-2">Business Description</label>
          <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700">
            It serves as an introduction to potential customers, investors, or
            partners, explaining what the business does and why it stands out.
          </div>
        </div>

        {/* Uploaded Images */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <label className="block font-medium mb-2">Uploaded Images</label>
          <div className="bg-gray-100 p-4 rounded-lg flex gap-2">
            <img
              src="/upload2.png"
              alt="img1"
              className="h-16 w-16 object-cover rounded-md"
            />
            <img
              src="/upload1.png"
              alt="img2"
              className="h-16 w-16 object-cover rounded-md"
            />
            <img
              src="/uploaded3.png"
              alt="img3"
              className="h-16 w-16 object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Services / Products provided by Vendor */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 md:ml-72">
        <h2 className="text-xl font-semibold mb-4">
          Services / Products provided by Vendor
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="border p-4 rounded-lg shadow bg-white">
              <p>
                <strong>Name:</strong> Ceramic flower vases
              </p>
              <p>
                <strong>Category:</strong> Home Decor
              </p>
              <p>
                <strong>Description:</strong> Blue textured cylindrical
              </p>
              <p>
                <strong>Price:</strong> ₹650/per piece
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bank Details */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 md:ml-72">
        <h2 className="text-xl font-semibold mb-4">Bank Details</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block font-medium">Bank Account Number</label>
            <input
              type="text"
              value="123456789032"
              className="w-full border rounded-lg p-2"
              readOnly
            />
          </div>
          <div>
            <label className="block font-medium">Bank Name</label>
            <input
              type="text"
              value="HDFC Bank"
              className="w-full border rounded-lg p-2"
              readOnly
            />
          </div>
          <div>
            <label className="block font-medium">IFSC Code</label>
            <input
              type="text"
              value="HDFC0001234"
              className="w-full border rounded-lg p-2"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Location Details */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 md:ml-72">
        <h2 className="text-xl font-semibold mb-4">Location Details</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block font-medium">Country</label>
            <input
              type="text"
              value="India"
              className="w-full border rounded-lg p-2"
              readOnly
            />
          </div>
          <div>
            <label className="block font-medium">State</label>
            <input
              type="text"
              value="Uttar Pradesh"
              className="w-full border rounded-lg p-2"
              readOnly
            />
          </div>
          <div>
            <label className="block font-medium">Street Address</label>
            <input
              type="text"
              value="Shop no. 63, Mayur Bihar, Greater Noida"
              className="w-full border rounded-lg p-2"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Approval Status */}
      <div className="flex justify-start mt-6 md:ml-72">
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Approved
        </button>
      </div>
    </div>
  );
};

export default BusinessDetails;
