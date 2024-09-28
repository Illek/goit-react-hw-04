// import s from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, isClose, customStyles, src, alt }) => {
  return (
    <Modal isOpenModal={isOpen} isCloseModal={isClose} style={customStyles}>
      <img src={src} alt={alt} />
    </Modal>
  );
};

export default ImageModal;
