
import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import './Main.css'; // Import the CSS file for styling

function Mainds() {
  const [tableData, setTableData] = useState([]);
  const [inputValue, setInputValue] = useState('');


  useEffect(() => {
    // Load data from localStorage on component mount
    const storedData = localStorage.getItem('excelData');
    if (storedData) {
      setTableData(JSON.parse(storedData));
    } else {
      alert("import your data");
    }
  }, []);

  const handleFile = (e) => {
    const file = e.target.files[0];

    // Check if a file is selected
    if (file) {
      const reader = new FileReader();

      // Callback function when the file is loaded
      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });

        // Assume the first sheet is the one you want to read
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Parse the sheet data into a JSON object
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // Update the state with the table data
        setTableData(jsonData);

        // Store data in localStorage
        localStorage.setItem('excelData', JSON.stringify(jsonData));
      };

      // Read the file as binary data
      reader.readAsBinaryString(file);
    }
  };
  const handleName = (event) => {
    const from_name = event.target.value
    setInputValue(event.target.value)
    console.log(from_name)

  }
  const handlePostData = async () => {
    console.log(tableData)
    if (inputValue === "") {
      alert("please put your Name");
      return;
    }
    const list = []
    for (let i = 1; i < tableData.length; i++) {
      let sendData = {
        "from_name": String(inputValue.trim()),
        "to_name": tableData[i][0],
        "mobile": String(tableData[i][1])
      }

      list.push(sendData)
    }



    console.log("api list :" + JSON.stringify(list))
    // Example POST request using fetch and JSONPlaceholder API
    const res = fetch('http://65.0.125.57:5050/Sendsms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apitoken': ''
      },
      body: JSON.stringify(list),

    })
    .then(response =>{
      console.log("my api res code "+response.status)
      if(response.status===200)
       response.json()

    })
    .then(result => {
      // Handle the result of the API call
        alert('Message successfully send');
      //displayResponse(result);
    })
    .catch(error => {
      console.error('Error:', error);
     // displayResponse({ error: 'An error occurred during the API call.' });
    });
  };

  return (<>



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
              </tr>
            </thead>
            <tbody>
              {tableData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handlePostData}>Send Message</button>
        </div>
      )}
    </div>
  </>
  );
};

export default Mainds;
