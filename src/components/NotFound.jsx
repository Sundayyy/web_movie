import React from "react";
import { ToastContainer, toast } from "react-toastify";
const NotFound = () => {
  toast.error("Warring!!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
  return (
    <div className="not-found">
      <ToastContainer position={toast.POSITION.TOP_RIGHT} />
      <h1>Opps! We can't find the page you're looking for.</h1>
    </div>
  );
};

export default NotFound;
