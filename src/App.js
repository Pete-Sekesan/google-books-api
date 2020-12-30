import React, { Component } from 'react'

export  class App extends Component {
  
  state ={
    books: [],
    query: 'shining'
}
  
  searchBooks = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q={this.state.query}`)
    .then(res => res.json())
    .then((res)=> this.setState({books:res.items}))
}
 
componentDidMount () {
    this.searchBooks();

  }



render() {
    return (
      <div className="App">
        <h1> Pete's Book Search</h1>
        <form>
          <input type="text" value={this.state.query} placeholder= "Book Search" aria-label="Book Search Query"/>
        </form>
        <p>Your search for "{this.state.query}"</p>
        <p> We found {this.state.books.length} results</p>
        <ul>
          {this.state.books.map(book =><li>{book.volumeInfo.title}</li>)}
        </ul>
      </div>
    )
  }
}

export default App
