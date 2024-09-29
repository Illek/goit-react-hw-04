import s from "./App.module.css";
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster, toast } from "react-hot-toast";
import ImageGallery from "../ImageGallery/ImageGallery";
import searchImages from "../../api";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

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
        console.log("getImages fn", data);

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
    };

    getImages();
  }, [page, query]);

  const searchRequest = (values, actions) => {
    setQuery(values);
    setPage(1);
    setIsVisible(false);
    setError(null);
    setImages([]);
    console.log("searchRequest fn", values);
  };

  const openModal = ({ url, alt }) => {
    console.log("Modal Opened");
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
      {loading && <Loader />}
      <ImageModal
        isOpen={isOpen}
        isClose={closeModal}
        src={modalUrl}
        alt={modalAlt}
      />
    </div>
  );
};

export default App;
