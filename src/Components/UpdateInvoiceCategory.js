import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getInvoiceById, updateInvoiceCategory } from "../apiService";

const UpdateInvoiceCategory = () => {
  const { id } = useParams();
  const [category, setCategory] = useState("");
  const [invoice, setInvoice] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const data = await getInvoiceById(id);
        setInvoice(data);
        setCategory(data.category);
      } catch (error) {
        console.error("Failed to fetch invoice:", error);
        setMessage("Failed to fetch invoice.");
      }
    };

    fetchInvoice();
  }, [id]);

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    try {
      const data = await updateInvoiceCategory(id, category);
      setMessage("Category updated successfully!");
      console.log(data);
    } catch (error) {
      setMessage("Failed to update category.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update Invoice Category</h2>
      {invoice ? (
        <form onSubmit={handleUpdateCategory}>
          <div>
            <label>Vendor: </label>
            <span>{invoice.vendor}</span>
          </div>
          <div>
            <label>Total: </label>
            <span>{invoice.total}</span>
          </div>
          <div>
            <label>Currency: </label>
            <span>{invoice.currency}</span>
          </div>
          <div>
            <label>Category: </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateInvoiceCategory;
