// import React, { useState, useEffect } from "react";
// import * as pdfjsLib from "pdfjs-dist";
// import { pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const PdfPreview = ({ file }) => {
//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [pdfPageNumber, setPdfPageNumber] = useState(1);
//   const [numPages, setNumPages] = useState(null);

//   useEffect(() => {
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setPdfUrl(url);

//       // Load PDF to get the total number of pages
//       const fileReader = new FileReader();
//       fileReader.onload = async (e) => {
//         const typedArray = new Uint8Array(e.target.result);
//         const pdf = await pdfjsLib.getDocument(typedArray).promise;
//         setNumPages(pdf.numPages);
//       };
//       fileReader.readAsArrayBuffer(file);
//     }
//   }, [file]);

//   const handleNextPage = () => {
//     setPdfPageNumber((prevPage) => Math.min(prevPage + 1, numPages));
//   };

//   const handlePrevPage = () => {
//     setPdfPageNumber((prevPage) => Math.max(1, prevPage - 1));
//   };

//   return (
//     <div className="border p-4">
//       {pdfUrl && (
//         <>
//           <iframe
//             src={`${pdfUrl}#page=${pdfPageNumber}`}
//             width="100%"
//             height="500px"
//             title="PDF Preview"
//           />
//           <div className="flex justify-between mt-2">
//             <button
//               onClick={handlePrevPage}
//               disabled={pdfPageNumber <= 1}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Previous Page
//             </button>
//             <span className="text-gray-700">
//               Page {pdfPageNumber} of {numPages}
//             </span>
//             <button
//               onClick={handleNextPage}
//               disabled={pdfPageNumber >= numPages}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Next Page
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default PdfPreview;

import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfPreview = ({ file }) => {
  return (
    <div className="pdf-preview">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer fileUrl={file.url} />
      </Worker>
    </div>
  );
};

export default PdfPreview;
