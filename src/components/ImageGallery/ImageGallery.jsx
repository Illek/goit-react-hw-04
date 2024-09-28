import s from "./ImageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <div className={s.galleryWrap}>
      <ul className={s.list}>
        {images.map(image => (
          <li key={image.id}>
            <div>
              <ImageCard urls={image.urls} slug={image.slug} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;

// {images && <img src={images.urls} alt={images.slug} width="240px" />}
