import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInvoices } from "../apiService";
import "./GetInvoices.css"; // Import the CSS file for styling

const GetInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchInvoices = async () => {
    setLoading(true);
    try {
      const data = await getInvoices();
      setInvoices(data);
    } catch (error) {
      console.error("Failed to fetch invoices:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const handleEdit = (id) => {
    navigate(`/update-invoice/${id}`);
  };

  const handleUpload = () => {
    navigate("/upload-invoice");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching invoices: {error.message}</div>;
  }

  return (
    <div>
      <h2>Invoices</h2>
      <button className="upload-button" onClick={handleUpload}>
        Upload Invoice
      </button>
      <table>
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Total</th>
            <th>Currency</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice._id}>
              <td>{invoice.vendor}</td>
              <td>{invoice.total}</td>
              <td>{invoice.currency}</td>
              <td>
                <button onClick={() => handleEdit(invoice._id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetInvoices;
