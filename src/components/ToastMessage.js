import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage = ({ message, type }) => {
  useEffect(() => {
    const showToast = () => {
      toast[type](message, { position: "top-right" });
    };

    showToast();
  }, [message, type]);

  return <ToastContainer />;
};

export default ToastMessage;
