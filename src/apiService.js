import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL;

export const uploadInvoice = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(`${API_URL}upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to upload invoice:", error);
    throw error;
  }
};
export const getInvoices = async () => {
  try {
    const response = await axios.get(`${API_URL}invoices`);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch invoices:", error);
    throw error;
  }
};

export const updateInvoiceCategory = async (id, category) => {
  try {
    const response = await axios.put(`${API_URL}invoices/${id}/category`, {
      category,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to update invoice category:", error);
    throw error;
  }
};

export const getInvoiceById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}invoices/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch invoice:", error);
    throw error;
  }
};
