import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, disabled }) => {
  return (
    <div className={s.buttonWrap}>
      <button className={s.loadMore} onClick={onClick} disabled={disabled}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
