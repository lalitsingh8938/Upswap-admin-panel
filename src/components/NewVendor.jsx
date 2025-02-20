import React, { useState } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const NewVendor = () => {
  const [description, setDescription] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [businessImages, setBusinessImages] = useState([]);
  const [businessDocuments, setBusinessDocuments] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage({ url: URL.createObjectURL(file), name: file.name });
    }
  };

  const handleBusinessImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const imagesArray = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setBusinessImages((prevImages) => [...prevImages, ...imagesArray]);
  };

  const handleBusinessDocumentsChange = (e) => {
    const files = Array.from(e.target.files);
    const documentsArray = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
      type: file.type,
    }));

    setBusinessDocuments((prevDocs) => {
      const updatedDocs = [...prevDocs, ...documentsArray];
      const pdfFile = updatedDocs.find((doc) => doc.type === "application/pdf");
      if (pdfFile) {
        setSelectedPdf(pdfFile);
        setIsPdfOpen(false); // Reset PDF open state when a new PDF is selected
      }
      return updatedDocs;
    });
  };

  const removeFile = (fileType, index) => {
    if (fileType === "profileImage") {
      setProfileImage(null);
    } else if (fileType === "businessImages") {
      setBusinessImages((prevImages) =>
        prevImages.filter((_, i) => i !== index)
      );
    } else if (fileType === "businessDocuments") {
      setBusinessDocuments((prevDocs) => {
        const updatedDocs = prevDocs.filter((_, i) => i !== index);
        if (selectedPdf && selectedPdf.url === prevDocs[index].url) {
          setSelectedPdf(null);
        }
        return updatedDocs;
      });
    }
  };

  const handleSubmit = () => {
    console.log("Submitting form data...");
  };

  return (
    <div className="container mx-auto p-6 bg-white min-h-screen">
      {/* Personal & Business Details */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md md:ml-72">
        <h2 className="text-xl font-semibold mb-4">
          Personal & Business Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 md:ml-72">
        <h2 className="text-xl font-semibold mb-4  opacity-90">
          Profile Picture, Business Description & Uploads
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Profile Picture Upload */}
          <div className="w-full md:w-auto">
            <h2 className="text-xl font-semibold mb-2 text-center opacity-70">
              Profile Picture
            </h2>
            <UploadSection
              label="Profile Picture"
              accept="image/*"
              onChange={handleProfileImageChange}
              files={profileImage ? [profileImage] : []}
              isImageOnly={true}
              isSingleFile={true}
              removeFile={removeFile}
              fileType="profileImage"
            />
          </div>

          {/* Business Images Upload */}
          <div className="w-full md:w-auto">
            <h2 className="text-xl font-semibold mb-2 text-center opacity-70">
              Upload Business Images
            </h2>
            <UploadSection
              label="Business Images Upload"
              accept="image/*"
              onChange={handleBusinessImagesChange}
              files={businessImages}
              isImageOnly={true}
              removeFile={removeFile}
              fileType="businessImages"
            />
          </div>

          {/* Business Documents Upload */}
          {/* Business Documents Upload */}
          <div className="w-full md:w-auto">
            <h2 className="text-xl font-semibold mb-2 text-center opacity-70">
              Business Documents
            </h2>
            <UploadSection
              label="Business Documents Upload"
              accept=".pdf,.svg,.png,.jpg,.jpeg"
              onChange={handleBusinessDocumentsChange}
              files={businessDocuments}
              isImageOnly={false}
              removeFile={removeFile}
              fileType="businessDocuments"
            />

            {/* Show Open PDF Buttons for Each Uploaded PDF */}
            {businessDocuments.length > 0 && (
              <div className="mt-4">
                {businessDocuments
                  .filter((doc) => doc.type === "application/pdf")
                  .map((doc, index) => (
                    <button
                      key={index}
                      className="bg-[#FC7444] text-white px-3 py-2 rounded mr-2 mb-2"
                      onClick={() => {
                        setSelectedPdf(doc);
                        setIsPdfOpen(true);
                      }}
                    >
                      Open PDF {index + 1}
                    </button>
                  ))}
              </div>
            )}

            {/* PDF Viewer Section */}
            {isPdfOpen && selectedPdf && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">PDF Preview:</h3>
                <div className="border rounded-lg overflow-hidden">
                  <Worker
                    workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                  >
                    <Viewer fileUrl={selectedPdf.url} />
                  </Worker>
                </div>
              </div>
            )}
          </div>

          {/* Business Description */}
          <div className="w-full md:w-80">
            <h2 className="text-xl font-semibold mb-2 text-center opacity-70">
              Business Description
            </h2>
            <textarea
              className="w-full p-2 border rounded-lg text-gray-600 focus:outline-none"
              placeholder="Description..."
              rows="6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Bank Details */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 md:ml-72">
        <h2 className="text-xl font-semibold mb-4">Bank Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InputField label="Enter Bank Account Number" value="123456789012" />
          <InputField label="Enter Bank Name" value="HDFC Bank" />
          <InputField label="Enter IFSC Code" value="HDFC0001234" />
        </div>
      </div>

      {/* Location Details */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 md:ml-72">
        <h2 className="text-xl font-semibold mb-4">Location Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <button
          className="bg-green-500 text-white px-8 font-bold py-2 rounded-lg"
          onClick={handleSubmit}
        >
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

const UploadSection = ({
  label,
  accept,
  onChange,
  files,
  isImageOnly,
  isSingleFile,
  removeFile, // Ensure this prop is passed
  fileType,
}) => {
  const handleClick = () => {
    document.getElementById(`file-input-${label}`).click();
  };

  return (
    <div className="flex flex-col items-center w-full md:w-80 p-6 border-dashed border-2 border-orange-300 rounded-lg bg-white">
      <UploadIcon onClick={handleClick} />
      <p className="text-gray-600 text-sm">
        Drag & Drop or{" "}
        <span className="text-orange-500 cursor-pointer" onClick={handleClick}>
          choose file
        </span>{" "}
        to upload
      </p>
      <p className="text-xs text-gray-500">
        Supported formats:{" "}
        {isImageOnly ? "SVG, PNG, JPG" : "PDF, SVG, PNG, JPG"}
      </p>
      <input
        id={`file-input-${label}`}
        type="file"
        accept={accept}
        onChange={onChange}
        className="hidden"
        multiple={!isSingleFile}
      />
      <div className="flex flex-wrap gap-2 mt-3">
        {files.map((file, index) => (
          <div key={index} className="relative">
            {isImageOnly || file.type?.startsWith("image") ? (
              <img
                src={file.url}
                alt={file.name}
                className={`w-20 h-20 ${
                  label === "Profile Picture" ? "rounded-full" : "rounded-lg"
                }`}
              />
            ) : (
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xs text-center break-words">
                  {file.name}
                </span>
              </div>
            )}

            <button
              onClick={() => removeFile(fileType, index)} // Call removeFile with fileType and index
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const UploadIcon = ({ onClick }) => (
  <div
    className="mb-2 p-3 bg-orange-200 rounded-full cursor-pointer"
    onClick={onClick}
  >
    📤
  </div>
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
