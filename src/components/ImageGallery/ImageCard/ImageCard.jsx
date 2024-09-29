import s from "./ImageCard.module.css";

const ImageCard = ({ urls, slug, openModal }) => {
  const handleClick = () => openModal(urls.regular, slug);

  return (
    <div className={s.imgWrap}>
      <img
        className={s.image}
        src={urls.small}
        alt={slug}
        width="240"
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
