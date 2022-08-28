import { Component } from 'react';

export class Modal extends Component {
  render() {
    const { images } = this.props;
    return (
      // close on escape and overlay click
      <div className="overlay">
        <div className="modal">
          <img src={images.largeImageURL} alt={images.tags} />
        </div>
      </div>
    );
  }
}
