import axios from "axios";

// const ACCESS_KEY = "EWKJVMVwyNxNAuobWvJ01duueFeI-DF1Ks5dpfEzK64";
const ACCESS_KEY = "a7-65JkW6wYXRX_w16CLjwBrow6ShdrnoA933s6cxLE";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${ACCESS_KEY}`;

const searchImages = async (query, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 10,
      orientation: "squarish",
    },
  });
  return response.data, console.log("API: ", response.data);
};

export default searchImages;
