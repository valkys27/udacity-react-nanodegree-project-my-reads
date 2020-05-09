import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../../BooksAPI'

const SHELFS = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'Read'
}

class BookShelfList extends React.Component {

    state = {
        books: []
    }

    componentWillMount() {
        BooksAPI.getAll()
          .then(books => this.setState({books: books}));
    }

    render() {
        console.info(this.state.books);
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {Object.keys(SHELFS).map(key => (
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{SHELFS[key]}</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.state.books.filter(book => book.shelf === key).map((book) => (
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                                        <div className="book-shelf-changer">
                                        <select>
                                            <option value="move" disabled>Move to...</option>
                                            {Object.keys(SHELFS).map((key) => (
                                                <option value={key}>{SHELFS[key]}</option>
                                            ))}
                                            <option value="none">None</option>
                                        </select>
                                        </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        </div>
                    </div>
                ))}
              </div>
            </div>
            <Link to='/search' className="open-search">Add a book</Link>
          </div>
        );
    }
}

export default BookShelfList;