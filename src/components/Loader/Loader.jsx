import axios from 'axios';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Component } from 'react';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export class Loader extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      '?q=cat&page=1&key=28252958-31fd02edbaf0cd1c2b2739817&image_type=photo&orientation=horizontal&per_page=12'
    );
    this.setState({ images: response.data });
  }

  render() {
    const { images } = this.state;
    return <>{images.length > 0 ? <ImageGallery images={images} /> : null}</>;
  }
}
