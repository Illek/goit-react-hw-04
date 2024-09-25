import s from "./ImageCard.module.css";

const ImageCard = ({ urls, alt_description }) => {
  return (
    <div className={s.image}>
      <img src={urls.small} alt={alt_description} width="240px" />
    </div>
  );
};

export default ImageCard;
