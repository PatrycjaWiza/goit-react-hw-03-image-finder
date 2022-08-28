import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { ImageGalleryStyle } from './ImageGalleryStyles';

export class ImageGallery extends Component {
  render() {
    const { images, openModal } = this.props;
    return (
      <ImageGalleryStyle className="gallery">
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
