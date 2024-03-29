import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
 // Import XLSX library for Excel file handling
import "./Upload.css";
import "remixicon/fonts/remixicon.css";

const DropzoneComponent = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      updateDropZoneFileList(e.target.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.target.closest(".dropzone-area").classList.add("dropzone--over");
  };

  const handleDragLeave = (e) => {
    e.target.closest(".dropzone-area").classList.remove("dropzone--over");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropZoneElement = e.target.closest(".dropzone-area");
    if (e.dataTransfer.files.length) {
      updateDropZoneFileList(e.dataTransfer.files[0]);
    }
    dropZoneElement.classList.remove("dropzone--over");
  };

  const updateDropZoneFileList = (file) => {
    setSelectedFile(file);
  };

  const handleReset = () => {
    setSelectedFile(null);
  };

  const handleSaveClick = () => {
    if (selectedFile) {
      // Read Excel file
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const tableData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // After parsing, navigate to the new page with table data
        navigate("/displaydata", { tableData });
      };

      reader.readAsArrayBuffer(selectedFile);
    } else {
      console.warn("No file data to save.");
      // You may want to display an error message or take appropriate action
    }
  };


  return (
    <>
      <div id="upload-container-box">
        <form action="" className="dropzone-box">
          <h2>Upload and attach file</h2>
          <p>Attach file to this Project</p>
          <div
            className="dropzone-area"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="file-upload-icon">
              {" "}
              <i className="ri-file-3-line"></i>
            </div>
            <p>Click to upload or drag and drop</p>
            <input
              type="file"
              required
              name="upload-file"
              onChange={handleFileChange}
              accept=".xls, .xlsx"
            />
            <p className="message">
              {selectedFile
                ? `${selectedFile.name}, ${selectedFile.size} bytes`
                : "No File Selected"}
            </p>
          </div>
          <div className="dropzone-over"></div>
          <div className="dropzone-actions">
            <button type="reset" onClick={handleReset}>
              Cancel
            </button>
            <button type="button" onClick={handleSaveClick}>
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DropzoneComponent;
