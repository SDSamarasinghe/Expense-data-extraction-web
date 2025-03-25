// filepath: /Users/macbook/Expense-data-extractor/src/App.js
import React from "react";
// import UploadInvoice from "./components/UploadInvoice";
// import GetInvoices from "./components/GetInvoices";
// import UpdateInvoiceCategory from "./components/UpdateInvoiceCategory";
import UploadInvoice from "./Components/UploadInvoice";
import GetInvoices from "./Components/GetInvoices";
import UpdateInvoiceCategory from "./Components/UpdateInvoiceCategory";

const App = () => {
  return (
    <div>
      <h1>Expense Data Extractor</h1>
      <UploadInvoice />
      <GetInvoices />
      <UpdateInvoiceCategory />
    </div>
  );
};

export default App;
