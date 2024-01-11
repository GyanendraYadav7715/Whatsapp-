import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import './Main.css';

function Mainds() {
  const [tableData, setTableData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [updateData, setUpdateData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('excelData');
    if (storedData) setTableData(JSON.parse(storedData));
    else alert("Import your data");
  }, []);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        setTableData(jsonData);
        localStorage.setItem('excelData', JSON.stringify(jsonData));
      };
      reader.readAsBinaryString(file);
    }
  };

  const handleName = (event) => {
    setInputValue(event.target.value);
  };

  const handlePostData = async () => {
    if (inputValue === "") {
      alert("Please put your Name");
      return;
    }
    const list = tableData.slice(1).map((row) => ({
      "from_name": inputValue.trim(),
      "to_name": row[0],
      "mobile": String(row[1])
    }));

    try {
      const res = await fetch(' ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apitoken': ''
        },
        body: JSON.stringify(list),
      });

      if (res.status === 200) {
        const result = await res.json();
        alert('Message successfully sent');
      } else {
        console.error('Error:', res.statusText);
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUpdate = (row) => {
    setUpdateData([...row]);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    const updatedTableData = tableData.map((rowData) =>
      rowData === updateData ? Object.values(updateData) : rowData
    );

    setTableData(updatedTableData);
    setIsModalOpen(false);
  };

  const handleRemove = (rowIndex) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(rowIndex + 1, 1);
    setTableData(updatedTableData);
    localStorage.setItem('excelData', JSON.stringify(updatedTableData));
  };

  return (
    <div className="excel-reader-container">
      <div id='put'>
        <input type="file" onChange={handleFile} />
        <input type='text' name='name' placeholder='From Name' onChange={handleName} />
      </div>

      {tableData.length > 0 && (
        <div>
          <table border="1">
            <thead>
              <tr>
                {tableData[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                  <td>
                    <button onClick={() => handleUpdate(row)}>Update</button>
                    <button onClick={() => handleRemove(rowIndex)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handlePostData}>Send Message</button>
        </div>
      )}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {updateData && updateData.map((value, columnIndex) => (
              <div key={columnIndex}>
                <label>{`Column ${columnIndex + 1}:`}</label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setUpdateData((prevData) => {
                    const newData = [...prevData];
                    newData[columnIndex] = e.target.value;
                    return newData;
                  })}
                />
              </div>
            ))}
            <button onClick={handleModalSubmit}>Submit</button>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mainds;
