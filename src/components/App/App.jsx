// import s from "./App.module.css"///;
import { useState } from "react";
import { searchImages } from "../../api";
import { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster, toast } from "react-hot-toast";

const App = () => {
  const searchRequest = (values, actions) => {
    console.log(values);
    setQuery(values);
    setPage(1);
    setImages([]);
  };

  const [images, setImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    setError(null);

    async function getImages() {
      try {
        const data = await searchImages(query, page);
        const { results, total_pages } = data;
        console.log(data);

        if (page === 1 && results.length === 0) {
          toast.error("No images found. Try again.");
        }
        setImages(prevImages => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getImages();
  }, [page, query]);

  return (
    <>
      <SearchBar onSubmit={searchRequest} />
    </>
  );
};

export default App;
