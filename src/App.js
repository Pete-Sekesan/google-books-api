import React, { Component } from 'react'

export  class App extends Component {
  state = {
    books: [],
    query: "shining",
  };

  searchBooks = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q={this.state.query}`)
      .then((res) => res.json())
      .then((res) => this.setState({ books: res.items }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.searchBooks();
  };

  componentDidMount() {
    this.searchBooks();
  }

  render() {
    return (
      <div className="App">
        <h1> Pete's Book Search</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            placeholder="Book Search"
            aria-label="Book Search Query"
            onChange={(e) => this.setState({ query: e.target.value })}
          />
          <input type="submit" value="Go" />
        </form>
        <p>Your search for "{this.state.query}"</p>
        <p> We found {this.state.books.length} results</p>
        <ul>
          {this.state.books.map((book) => (
            <li>{book.volumeInfo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App
