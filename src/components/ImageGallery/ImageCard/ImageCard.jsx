import s from "./ImageCard.module.css";

const ImageCard = ({ urls, slug, toOpenModal }) => {
  return (
    <div className={s.imgWrap}>
      <img
        className={s.image}
        src={urls.small}
        alt={slug}
        width="240"
        onClick={() => toOpenModal(urls.small, slug)}
      />
    </div>
  );
};

export default ImageCard;
