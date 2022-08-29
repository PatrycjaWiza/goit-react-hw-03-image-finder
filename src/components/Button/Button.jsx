import { Component } from 'react';
import { ButtonStyles } from './ButtonStyles';

export class Button extends Component {
  render() {
    const { loadMore } = this.props;
    return (
      <ButtonStyles type="button" onClick={loadMore}>
        Load more
      </ButtonStyles>
    );
  }
}
