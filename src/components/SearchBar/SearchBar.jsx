import s from "./SearchBar.module.css";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const errNotify = () => toast.error("Oops! You should type something");

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      return errNotify();
    }
    onSubmit(query.trim());
    setQuery("");
    // form.reset();
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <header className={s.header}>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.searchInput}
          value={query}
          onChange={handleChange}
          name="searchInput"
        />
        <button className={s.submitSearchBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
