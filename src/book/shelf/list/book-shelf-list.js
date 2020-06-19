import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../../BooksAPI';
import BookShelfListItem from './book-shelf-list-item';

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
                {Object.keys(SHELFS).map(key => ( <BookShelfListItem key={key} shelfOptions={SHELFS} code={key} books={this.state.books.filter(book => book.shelf === key)} /> ))}
              </div>
            </div>
            <Link to='/search' className="open-search">Add a book</Link>
          </div>
        );
    }
}

export default BookShelfList;