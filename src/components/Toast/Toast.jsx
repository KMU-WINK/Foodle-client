import React, { useEffect } from "react";
import { ToastBox } from "./styles";

const Toast = ({ message, isActive, setIsActive }) => {
  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setIsActive(false);
      }, 2000);
    }
  });
  return (
    <>
      {isActive ? (
        <ToastBox show={true}>{message}</ToastBox>
      ) : (
        <ToastBox show={false} />
      )}
    </>
  );
};

export default Toast;
