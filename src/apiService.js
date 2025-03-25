import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL;

export const uploadInvoice = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(`${API_URL}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getInvoices = async () => {
  const response = await axios.get(`${API_URL}/invoices`);
  return response.data;
};

export const updateInvoiceCategory = async (id, category) => {
  const response = await axios.put(`${API_URL}/invoices/${id}/category`, {
    category,
  });
  return response.data;
};
