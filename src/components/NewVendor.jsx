import React, { useState } from "react";

const NewVendor = () => {
  const [description, setDescription] = useState("");

  return (
    <div className="container mx-auto p-6 bg-white min-h-screen ">
      {/* Personal & Business Details */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md md:ml-72">
        <h2 className="text-xl font-semibold mb-4">
          Personal & Business Details
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <InputField label="Enter First Name" value="Vinod" />
          <InputField label="Enter Middle Name" value="Kumar" />
          <InputField
            label="Enter Business Email ID"
            value="vinodhomeadepieces@gmail.com"
          />
          <InputField label="Enter Phone No." value="+91 1234567890" />
          <InputField label="Enter Business Establishment Year" value="2007" />
          <InputField
            label="Enter Business Hours"
            value="10:00 AM - 08:30 PM (Friday Closed)"
          />
        </div>
      </div>

      {/* Profile Picture, Business Description & Uploads */}
      <div className="flex flex-wrap justify-center gap-6 bg-gray-100 p-6 mt-6 rounded-lg shadow-md md:ml-72">
        <UploadSection label="Profile Picture Upload" />
        <div className="w-96">
          {/* <label className="block text-center font-semibold">Enter Business Description</label> */}
          <textarea
            className="w-full p-3 border rounded-lg text-gray-600 focus:outline-none"
            placeholder="Description..."
            rows="6"
          />
        </div>
        <UploadSection label="Business Images Upload" />
        <UploadSection label="Business Documents Upload" />
      </div>

      {/* Services / Products */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 md:ml-72">
        <h2 className="text-xl font-semibold mb-4">
          Services / Products provided by Vendor
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>

      {/* Bank Details */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 md:ml-72">
        <h2 className="text-xl font-semibold mb-4">Bank Details</h2>
        <div className="grid grid-cols-3 gap-6">
          <InputField label="Enter Bank Account Number" value="123456789012" />
          <InputField label="Enter Bank Name" value="HDFC Bank" />
          <InputField label="Enter IFSC Code" value="HDFC0001234" />
        </div>
      </div>

      {/* Location Details */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 md:ml-72">
        <h2 className="text-xl font-semibold mb-4">Location Details</h2>
        <div className="grid grid-cols-3 gap-6">
          <InputField label="Enter Country" value="India" />
          <InputField label="Enter State" value="Uttar Pradesh" />
          <InputField
            label="Enter Street Address"
            value="Shop no. 58, Mayur Bihar, Greater Noida"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 md:ml-72">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

const InputField = ({ label, value }) => (
  <div>
    <label className="block font-medium">{label}</label>
    <input
      type="text"
      value={value}
      className="w-full border rounded-lg p-2"
      readOnly
    />
  </div>
);

const UploadSection = ({ label }) => (
  <div className="flex flex-col items-center w-80 p-6 border-dashed border-2 border-orange-300 rounded-lg bg-white">
    <UploadIcon />
    <p className="text-gray-600 text-sm">
      Drag & Drop or{" "}
      <span className="text-orange-500 cursor-pointer">choose file</span> to
      upload
    </p>
    <p className="text-xs text-gray-500">
      Supported formats: SVG, PNG, JPG (max. 800×400px)
    </p>
  </div>
);

const UploadIcon = () => (
  <div className="mb-2 p-3 bg-orange-200 rounded-full">📤</div>
);

const ProductCard = () => (
  <div className="p-4 border rounded-lg bg-white shadow">
    <p>
      <strong>Name:</strong> Ceramic Flower Vases
    </p>
    <p>
      <strong>Category:</strong> Home Decor
    </p>
    <p>
      <strong>Description:</strong> Blue textured cylindrical ceramic vases
    </p>
    <p>
      <strong>Price:</strong> ₹850 / per piece
    </p>
  </div>
);

export default NewVendor;
