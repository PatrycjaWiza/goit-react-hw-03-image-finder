import { Component } from 'react';
import { SearchbarStyle } from './SearchbarSyles';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  reset() {
    this.setState({ name: '' });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };
  render() {
    const { name } = this.state;
    const { onSubmit } = this.props;
    return (
      <SearchbarStyle className="searchbar">
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            onSubmit(name);
            this.reset();
          }}
        >
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
            value={name}
            onChange={this.handleChange}
          />
        </form>
      </SearchbarStyle>
    );
  }
}
