import { Component } from 'react';
import { ImageGalleryItemStyle } from './ImageGalleryItemStyle';

export class ImageGalleryItem extends Component {
  render() {
    const { openModal, webformatURL, tags, largeImageURL, id } = this.props;
    return (
      <>
        <ImageGalleryItemStyle className="gallery-item">
          <img
            onClick={openModal}
            src={webformatURL}
            alt={tags}
            data-largeimg={largeImageURL}
            key={id}
          />
        </ImageGalleryItemStyle>
      </>
    );
  }
}
