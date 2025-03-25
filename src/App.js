import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadInvoice from "./Components/UploadInvoice";
import GetInvoices from "./Components/GetInvoices";
import UpdateInvoiceCategory from "./Components/UpdateInvoiceCategory";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetInvoices />} />
        <Route path="/upload-invoice" element={<UploadInvoice />} />
        <Route path="/update-invoice/:id" element={<UpdateInvoiceCategory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
