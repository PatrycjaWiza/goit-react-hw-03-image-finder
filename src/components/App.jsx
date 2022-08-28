import styles from '../index.css';
import axios from 'axios';
import { Component } from 'react';

import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '28252958-31fd02edbaf0cd1c2b2739817';

export class App extends Component {
  state = {
    isLoading: false,
    error: null,
    images: [],
    searchWord: '',
    page: 1,
    showModal: false,
  };

  // HTTP
  async fetchImages(page) {
    this.setState({ isLoading: true });
    const query = this.state.searchWord;
    const response = await axios.get(
      `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ images: response.data.hits, isLoading: false });
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log(query);
    console.log(page);
  }

  getSearchWord = values => {
    this.setState({
      images: [],
      searchWord: '',
      page: 1,
      showModal: false,
    });

    this.setState({ searchWord: values });
    const { page } = this.state;
    this.fetchImages(values, page);
  };

  loadMore() {
    const { searchWord, page } = this.state;
    console.log(page);

    this.fetchImages(searchWord, page);
  }
  openModal() {
    this.setState({ showModal: true });
  }
  render() {
    const { images, isLoading, showModal } = this.state;
    return (
      <div style={styles.App}>
        <Searchbar onSubmit={this.getSearchWord} />
        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery images={images} openModal={this.openModal} />
        )}
        {showModal ? <Modal /> : ''}
        {images.length !== 0 ? <Button onClick={this.loadMore} /> : ''}
      </div>
    );
  }
}
