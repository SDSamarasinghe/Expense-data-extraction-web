// filepath: /Users/macbook/Expense-data-extractor/src/components/UpdateInvoiceCategory.js
import React, { useState } from "react";
import { updateInvoiceCategory } from "../apiService";

const UpdateInvoiceCategory = () => {
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Invoice ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateInvoiceCategory;
