// import s from "./ImageModal.module.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: { backgroundColor: "rgba(0,0,0, 0.7) " },
};

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, alt, src }) {
  return (
    <Modal
      isOpenModal={isOpen}
      isCloseModal={onRequestClose}
      style={customStyles}
    >
      <img src={src} alt={alt} />
    </Modal>
  );
}
