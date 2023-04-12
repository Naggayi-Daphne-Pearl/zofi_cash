import React from "react";
import KYCPage from "@/components/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const KYC = () => {
  return (
    <div>
      <ToastContainer />
      <KYCPage />
    </div>
  );
};

export default KYC;
