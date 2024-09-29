import s from "./ImageCard.module.css";

const ImageCard = ({ urls, slug, openModal }) => {
  return (
    <div className={s.imgWrap}>
      <img
        className={s.image}
        src={urls.small}
        alt={slug}
        width="240"
        onClick={() => openModal(urls.regular, slug)}
      />
    </div>
  );
};

export default ImageCard;
