import React, { useState } from "react";
import { uploadInvoice } from "../apiService";

const UploadInvoice = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await uploadInvoice(file);
      setMessage("Invoice uploaded successfully!");
      console.log(data);
    } catch (error) {
      setMessage("Failed to upload invoice.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Upload Invoice</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadInvoice;
