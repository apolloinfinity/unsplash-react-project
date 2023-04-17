import axios from "axios";

const unsplashApiKey = process.env.REACT_APP_UNSPLASH_KEY;

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${unsplashApiKey}`,
    },
    params: {
      query: term,
    },
  });
  return response.data?.results;
};

export default searchImages;
