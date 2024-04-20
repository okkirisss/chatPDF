import React, { useState } from 'react';
import axios from 'axios';

function UploadButton({ onFileUploadSuccess }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
      onFileUploadSuccess(); 
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    }
  };

  return (
    <div className="upload-button">
      <input
        type="file"
        id="file"
        accept="application/pdf"
        onChange={handleFileChange}
        hidden
      />
      <label htmlFor="file">Choose PDF</label>
      <button onClick={handleUpload}>Upload PDF</button>
    </div>
  );
}

export default UploadButton;
