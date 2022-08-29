import { Component } from 'react';
import { ModalStyles } from './ModalStyles';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.escOnClick);
  }

  escOnClick = e => {
    if (e.key === 'Escape') {
      this.props.escModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.escOnClick);
  }

  render() {
    const { children, closeModal } = this.props;
    return (
      <ModalStyles onClick={closeModal} className="overlay">
        <div className="modal">{children}</div>
      </ModalStyles>
    );
  }
}
