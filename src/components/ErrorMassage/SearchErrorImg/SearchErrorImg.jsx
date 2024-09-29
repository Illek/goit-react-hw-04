import s from "./SearchErrorImg.module.css";
import img from "./leam-cant-find.jpg";

const SearchErrorImg = () => {
  return (
    <div className={s.imageWrap}>
      <img
        className={s.img}
        src={img}
        alt="Leam can't find what you need"
        width="410"
      ></img>
    </div>
  );
};

export default SearchErrorImg;
