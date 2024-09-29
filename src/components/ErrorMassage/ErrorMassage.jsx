import s from "./ErrorMassage.module.css";

import SearchErrorImg from "./SearchErrorImg/SearchErrorImg";

const ErrorMassage = ({ message }) => {
  return (
    <div>
      <SearchErrorImg />
      <p className={s.text}>{message}</p>
    </div>
  );
};

export default ErrorMassage;
