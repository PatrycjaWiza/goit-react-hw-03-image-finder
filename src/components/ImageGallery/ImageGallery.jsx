import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { ImageGalleryStyle } from './ImageGalleryStyles';

export class ImageGallery extends Component {
  render() {
    const { images, openModal, id } = this.props;
    return (
      <ImageGalleryStyle key={id} className="gallery">
        {images.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              openModal={openModal}
              images={images}
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
            ></ImageGalleryItem>
          );
        })}
      </ImageGalleryStyle>
    );
  }
}
