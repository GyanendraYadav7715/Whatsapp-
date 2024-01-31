import React from "react";

const DisplayData = ({ tableData }) => {
  return (
    <div>
      <h2>Displaying Table Data</h2>
      <table>
        <thead>
          <tr>
            {/* Assuming the first row in the Excel file is the header */}
            {tableData[0].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Assuming the rest of the rows are data */}
          {tableData.slice(1).map((row, rowIndex) => (
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

export default DisplayData;
