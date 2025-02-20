import React, { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";
import mammoth from "mammoth";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null); // State for the PDF URL
  const [pdfPageNumber, setPdfPageNumber] = useState(1); // Page tracking for PDF
  const [isPdfFile, setIsPdfFile] = useState(false); // Flag to identify PDF

  const handleFileChange = (file) => {
    if (!file) {
      return;
    }
    setError(""); // Reset previous errors
    setLoading(true); // Start loading state
    setPdfUrl(null); // Reset PDF URL
    setText(""); // Reset the text

    if (file.type === "application/pdf") {
      setIsPdfFile(true); // It's a PDF file
      setPdfUrl(URL.createObjectURL(file)); // Set the PDF file URL
      extractPDFText(file); // Extract text from PDF
    } else if (file.name.endsWith(".docx")) {
      setIsPdfFile(false); // It's a DOCX file
      extractDocxText(file); // Extract text from DOCX
    } else {
      setError("Unsupported file type. Please upload a PDF or DOCX file.");
      setLoading(false);
    }
  };

  const extractPDFText = async (file) => {
    try {
      const fileReader = new FileReader();

      fileReader.onload = async (e) => {
        const typedArray = new Uint8Array(e.target.result);
        const pdf = await pdfjsLib.getDocument(typedArray).promise;
        let extractedText = "";
        let currentSection = ""; // To hold text for the current section

        const sectionThreshold = 50; // Threshold for large vertical gaps (e.g., 50px between text fragments)

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const items = textContent.items;

          let lastY = null; // Variable to keep track of the last Y position
          let newSection = false; // Flag to detect new section

          // Group text by detecting large vertical gaps
          items.forEach(({ str, transform, width, height }) => {
            const yPosition = Math.round(transform[5]); // Vertical position of the text

            if (lastY !== null) {
              const gap = Math.abs(lastY - yPosition); // Calculate the gap between two lines

              if (gap > sectionThreshold) {
                // If the gap is greater than the threshold, treat it as a new section
                newSection = true;
              }
            }

            // If it's a new section, add the previous section's content to the extracted text
            if (newSection) {
              extractedText += currentSection + "\n\n"; // Add previous section and clear it for the next one
              currentSection = ""; // Reset for the next section
              newSection = false; // Reset new section flag
            }

            // Append the current text to the section content
            currentSection += str + " "; // Add space between words

            lastY = yPosition; // Update the last Y position
          });

          // Append the last section content after processing all items
          extractedText += currentSection + "\n\n";
        }

        // Clean up and update state with the extracted text
        extractedText = extractedText.trim();
        setText(extractedText); // Your state update function
      };

      fileReader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("Error extracting PDF text with sections:", error);
    } finally {
      setLoading(false); // End loading state
    }
  };

  // Example helper function to check if text is near a border (you can adjust this as per your needs)
  const checkIfNearBorder = (x, y, width, height) => {
    // Define a threshold to check if the text is near the left, right, top, or bottom border
    const borderThreshold = 5; // Change this value as needed

    const isNearVerticalBorder =
      x <= borderThreshold || x + width >= window.innerWidth - borderThreshold;
    const isNearHorizontalBorder =
      y <= borderThreshold ||
      y + height >= window.innerHeight - borderThreshold;

    return isNearVerticalBorder || isNearHorizontalBorder;
  };

  const extractDocxText = async (file) => {
    try {
      const fileReader = new FileReader();
      fileReader.onload = async (e) => {
        const arrayBuffer = e.target.result;
        const result = await mammoth.extractRawText({ arrayBuffer });
        setText(result.value);
      };
      fileReader.readAsArrayBuffer(file);
    } catch (error) {
      setError("An error occurred while extracting DOCX text.");
      console.error("Error extracting DOCX text:", error);
    } finally {
      setLoading(false); // End loading state
    }
  };

  const handleNextPage = () => {
    setPdfPageNumber((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPdfPageNumber((prevPage) => Math.max(1, prevPage - 1));
  };

  return (
    <div>
      <div className="flex p-4">
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={(e) => handleFileChange(e.target.files[0])}
          className="cursor-pointer"
        />
      </div>
      <div className="px-4">
        {loading ? (
          <p>Processing...</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {/* PDF Preview */}
            <div>
              <textarea
                className="w-full text-xs h-full"
                value={text}
                readOnly
                rows={40}
              />
            </div>
            {pdfUrl && (
              <div className="border p-4">
                <iframe
                  src={pdfUrl}
                  width="100%"
                  height="100%"
                  title="PDF Preview"
                ></iframe>
                <div className="flex justify-between mt-2">
                  <button
                    onClick={handlePrevPage}
                    disabled={pdfPageNumber <= 1}
                  >
                    Previous Page
                  </button>
                  <button onClick={handleNextPage}>Next Page</button>
                </div>
              </div>
            )}

            {/* DOCX Preview */}
          </div>
        )}

        {error && (
          <div style={{ color: "red", marginTop: "10px" }}>
            <strong>{error}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
