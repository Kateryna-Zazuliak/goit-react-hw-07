import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

const ErrorMessage = ({ message }) => {
  useEffect(() => {
    toast(message, {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  }, [message]);
  return (
    <div>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
};

export default ErrorMessage;
