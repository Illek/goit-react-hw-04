import s from "./App.module.css";
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster, toast } from "react-hot-toast";
import ImageGallery from "../ImageGallery/ImageGallery";
import searchImages from "../../api";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMassage from "../ErrorMassage/ErrorMassage";

const App = () => {
  const [images, setImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    setError(null);

    const getImages = async () => {
      try {
        const data = await searchImages(query, page);
        const { results, total_pages } = data;

        if (page === 1 && results.length === 0) {
          // toast.error("No images found. Try again.");
          setError(true);
        }
        setImages(prevImages => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [page, query]);

  const searchRequest = (values, actions) => {
    setQuery(values);
    setPage(1);
    setIsVisible(false);
    setError(null);
    setImages([]);
  };

  const openModal = (url, alt) => {
    setIsOpen(true);
    setModalUrl(url);
    setModalAlt(alt);
  };
  const closeModal = () => {
    setIsOpen(false);
    setModalUrl("");
    setModalAlt("");
  };

  return (
    <div className={s.appContainer}>
      <SearchBar onSubmit={searchRequest} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isVisible && images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMore} disabled={loading}>
          {loading ? "Loading..." : "Load more"}
        </LoadMoreBtn>
      )}
      {error && (
        <ErrorMassage message={"Sorry, Leam cant't find what you need :("} />
      )}
      {loading && <Loader />}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        src={modalUrl}
        alt={modalAlt}
      />
    </div>
  );
};

export default App;
