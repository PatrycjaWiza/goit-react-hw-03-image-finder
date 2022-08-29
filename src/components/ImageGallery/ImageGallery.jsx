import { Component } from 'react';
import { ImageGalleryStyle } from './ImageGalleryStyles';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    const { images, openModal } = this.props;
    return (
      <ImageGalleryStyle className="gallery">
        {images.map(image => {
          return (
            <ImageGalleryItem
              images={image}
              key={image.id}
              openModal={openModal}
            ></ImageGalleryItem>
          );
        })}
      </ImageGalleryStyle>
    );
  }
}
