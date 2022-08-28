import { Component } from 'react';
import { SearchbarStyle } from './SearchbarSyles';

export class Searchbar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.searchWord.value;
    this.props.onSubmit({ name });
    form.reset();
  };
  render() {
    return (
      <SearchbarStyle className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchWord"
          />
        </form>
      </SearchbarStyle>
    );
  }
}
