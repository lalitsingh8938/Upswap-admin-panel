import React, { useState } from "react";

const NewVendor = () => {
  const [description, setDescription] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [businessImages, setBusinessImages] = useState([]);
  const [businessDocuments, setBusinessDocuments] = useState([]);

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
    setBusinessDocuments((prevDocs) => [...prevDocs, ...documentsArray]);
  };

  const handleSubmit = () => {
    console.log("Submitting form data...");
  };

  return (
    <div className="container mx-auto p-6 bg-white min-h-screen">
      <div className="flex flex-wrap justify-center gap-6 bg-gray-100 p-6 mt-6 rounded-lg shadow-md md:ml-72">
        <UploadSection
          label="Profile Picture"
          accept="image/*"
          onChange={handleProfileImageChange}
          files={profileImage ? [profileImage] : []}
          isImageOnly={true}
          isSingleFile={true}
        />

        <div className="w-full md:w-96">
          <textarea
            className="w-full p-3 border rounded-lg text-gray-600 focus:outline-none"
            placeholder="Description..."
            rows="6"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <UploadSection
          label="Business Images Upload"
          accept="image/*"
          onChange={handleBusinessImagesChange}
          files={businessImages}
          isImageOnly={true}
        />

        <UploadSection
          label="Business Documents Upload"
          accept=".pdf,.svg,.png,.jpg,.jpeg"
          onChange={handleBusinessDocumentsChange}
          files={businessDocuments}
          isImageOnly={false}
        />
      </div>

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

const UploadSection = ({
  label,
  accept,
  onChange,
  files,
  isImageOnly,
  isSingleFile = false,
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
                className="w-16 h-16 rounded-full"
              />
            ) : (
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xs text-center break-words">
                  {file.name}
                </span>
              </div>
            )}
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

export default NewVendor;
