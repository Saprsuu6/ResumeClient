import React from "react";
import modalWindowStyles from "./ModalWindow.module.scss";

interface Props {
  header: string;
  context: string[];
  isClose: boolean;
  setIsClose: (temp: boolean) => void;
}

const ModalWindow: React.FC<Props> = ({
  header,
  context,
  isClose,
  setIsClose,
}) => {
  const close = {
    display: isClose ? "none" : "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className={modalWindowStyles.modal} style={close}>
      <div className={modalWindowStyles.modal_content}>
        <div
          className={modalWindowStyles.close}
          onClick={() => setIsClose(!isClose)}
        />
        <h3 style={{ marginBottom: "10px" }}>{header}</h3>
        <ul>
          {context.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ModalWindow;
