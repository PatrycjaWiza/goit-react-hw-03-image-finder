import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '28252958-31fd02edbaf0cd1c2b2739817';

export const fetchImagesWithQuery = async (searchQuery, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=28252958-31fd02edbaf0cd1c2b2739817&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export default { fetchImagesWithQuery };
