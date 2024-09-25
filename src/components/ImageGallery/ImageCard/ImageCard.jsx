import s from "./ImageCard.module.css";

export default function ImageCard({ urls, slug }) {
  return (
    <div>
      <img className={s.image} src={urls.small} alt={slug} width="240" />
    </div>
  );
}
