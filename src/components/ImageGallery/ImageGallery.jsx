import s from "./ImageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.list}>
      {images.map(image => (
        <li key={image.id}>
          <div>
            <ImageCard urls={image.urls} slug={image.slug} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

// {images && <img src={images.urls} alt={images.slug} width="240px" />}
