import s from "./ImageGallery.module.css";

import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    (
      <ul className={s.listItem}>
        {images.map(image => (
          <li key={image.id}>
            <div>
              <ImageCard
                urls={image.urls}
                alt_description={image.alt_description}
              />
            </div>
          </li>
        ))}
      </ul>
    ),
    console.log(images)
  );
};

export default ImageGallery;

// {images && <img src={images.urls} alt={images.slug} width="240px" />}
