import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

const ConvertTablePage = ({ selectedFile }) => {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    // Check if selectedFile is available
    if (selectedFile) {
      // Read the Excel file
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        // Assume the first sheet is the one you're interested in
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert sheet data to array
        const dataArray = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // Separate header and rows
        const [header, ...rows] = dataArray;

        setTableData({ header, rows });
      };

      reader.readAsArrayBuffer(selectedFile);
    }
  }, [selectedFile]);

  // Check if uploadedData is available
  if (!tableData) {
    return (
      <div>
        <h2>No data available</h2>
      </div>
    );
  }

  const { header, rows } = tableData;

  return (
    <div>
      <h2>Converted HTML Table</h2>
      <table>
        <thead>
          <tr>
            {/* Render table header */}
            {header.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Render table rows */}
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConvertTablePage;
