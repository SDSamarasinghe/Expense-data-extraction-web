import React, { useEffect, useState } from "react";
import { getInvoices } from "../apiService";

const GetInvoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const data = await getInvoices();
        setInvoices(data);
      } catch (error) {
        console.error("Failed to fetch invoices:", error);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice._id}>
            {invoice.vendor} - {invoice.total} {invoice.currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetInvoices;
