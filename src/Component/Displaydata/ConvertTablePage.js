// ConvertTablePage.js

import React from 'react';

const ConvertTablePage = ({ uploadedData }) => {
  // Check if uploadedData is available
  if (!uploadedData) {
    return (
      <div>
        <h2>No data available</h2>
      </div>
    );
  }

  // Extract header and rows from the uploadedData
  const [header, ...rows] = uploadedData;

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
