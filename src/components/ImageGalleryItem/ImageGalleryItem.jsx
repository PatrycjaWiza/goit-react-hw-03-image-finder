import { Component } from 'react';
import { ImageGalleryItemStyle } from './ImageGalleryItemStyle';

export class ImageGalleryItem extends Component {
  render() {
    const { images, openModal } = this.props;
    const { webformatURL, tags, largeImageURL } = images;
    return (
      <>
        <ImageGalleryItemStyle className="gallery-item">
          <img
            src={webformatURL}
            alt={tags}
            onClick={() => openModal(largeImageURL)}
          />
        </ImageGalleryItemStyle>
      </>
    );
  }
}
