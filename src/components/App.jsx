import styles from '../index.css';
import { Component } from 'react';
import * as api from '../Services/api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    isLoading: false,
    images: [],
    error: null,
    searchWord: '',
    page: 1,
    showModal: false,
    largeImageURL: '',
  };

  getSearchWord = searchWord => {
    this.setState({
      images: [],
      searchWord,
      page: 1,
    });
  };

  renderImages = async (searchQuery, page) => {
    try {
      this.setState({ isLoading: true });

      const images = await api.fetchImagesWithQuery(searchQuery, page);

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMoreBtn = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = largeImageURL => {
    this.setState({ largeImageURL: largeImageURL, showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchWord !== this.state.searchWord ||
      prevState.page !== this.state.page
    ) {
      this.renderImages(this.state.searchWord, this.state.page);
    }
  }

  render() {
    const { images, isLoading, error, showModal, largeImageURL } = this.state;
    return (
      <div style={styles.App}>
        {showModal && (
          <Modal
            images={images}
            closeModal={this.closeModal}
            escModal={this.closeModal}
          >
            <img src={largeImageURL} alt="enlarged" />
          </Modal>
        )}

        {error && <p>{error.message}</p>}
        <Searchbar onSubmit={this.getSearchWord} />
        {isLoading && <Loader />}

        {images.length > 0 && (
          <ImageGallery images={images} openModal={this.openModal} />
        )}

        {images.length > 0 && <Button loadMore={this.loadMoreBtn} />}
      </div>
    );
  }
}
