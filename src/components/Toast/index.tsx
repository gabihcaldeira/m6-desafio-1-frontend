import { useContext, useEffect } from "react";
import { ToastContainer } from "./style";
import { FiAlertCircle, FiXCircle, FiLoader } from "react-icons/fi";

import { Context } from "../../context/context";

const Toast = () => {
  const { toastType, isToastOpen } = useContext(Context);

  return (
    <ToastContainer className="toast" itemScope={isToastOpen}>
      {toastType === "Timeout" && (
        <div className="messageContainer">
          <FiAlertCircle className="message_icon --timeout" />
          <p className="message_text">Tempo excedido!</p>
        </div>
      )}
      {toastType === "Internal Server Error" && (
        <div className="messageContainer">
          <FiXCircle className="message_icon --error" />
          <p className="message_text">Erro Interno no Servidor</p>
        </div>
      )}

      {toastType === "delay" && (
        <div className="messageContainer">
          <FiLoader className="message_icon --delay" />
          <p className="message_text">Carregando...</p>
        </div>
      )}
    </ToastContainer>
  );
};

export default Toast;
