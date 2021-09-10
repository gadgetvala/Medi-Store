import React, { useEffect, useContext } from "react";
import { AppContext } from "context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationToast = () => {
  const { notificationToastValue } = useContext(AppContext);

  useEffect(() => {
    if (notificationToastValue !== "")
      toast(notificationToastValue, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  });

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default NotificationToast;
