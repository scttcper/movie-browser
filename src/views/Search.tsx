import React from 'react';

class Search extends React.Component {
  _input?: HTMLInputElement;

  componentDidMount() {
    if (this._input) {
      this._input.focus();
    }
  }

  render() {
    return (
      <main className="container mt-4">
        <form>
          <div className="form-group">
            <label htmlFor="movieSearch">Movie Search</label>
            <input
              type="text"
              autoFocus={true}
              className="form-control"
              id="movieSearch"
              aria-describedby="movieSearchDetails"
              placeholder="Name of movie to add"
              ref={(c: HTMLInputElement) => (this._input = c)}
            />
            <small id="movieSearchDetails" className="form-text text-muted">
              Search IMDB id by using imdb: prefix
            </small>
          </div>
        </form>
      </main>
    );
  }
}

export default Search;
