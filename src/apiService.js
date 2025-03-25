import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL;
console.log("🚀 ~ API_URL:", API_URL);

export const uploadInvoice = async (file) => {
  const formData = new FormData();
  console.log("🚀 ~ uploadInvoice ~ formData:", formData);
  formData.append("file", file);

  try {
    const response = await axios.post(`${API_URL}/invoices/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("🚀 ~ uploadInvoice ~ response:", response.data);

    return response.data;
  } catch (error) {
    console.error("Failed to upload invoice:", error);
    throw error;
  }
};
export const getInvoices = async () => {
  try {
    const response = await axios.get(`${API_URL}/invoices`);
    console.log("🚀 ~ getInvoices ~ response.data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch invoices:", error);
    throw error;
  }
};

export const updateInvoiceCategory = async (id, category) => {
  try {
    const response = await axios.put(`${API_URL}/invoices/${id}/category`, {
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
    const response = await axios.get(`${API_URL}/invoices/${id}`);
    console.log("🚀 ~ getInvoiceById ~ response.data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch invoice:", error);
    throw error;
  }
};
