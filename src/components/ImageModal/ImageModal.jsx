import s from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, alt, src }) {
  const signal = isOpen;
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={s.cardWrap}
        overlayClassName={s.overlay}
      >
        <img src={src} alt={alt} className={s.image} />
      </Modal>
    </div>
  );
}
