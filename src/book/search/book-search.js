import React from 'react';
import * as BooksAPI from '../../BooksAPI';
import BookSearchBar from './book-search-bar';
import BookList from '../list/book-list';

const SHELFS = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'Read'
}

class BookSearch extends React.Component {

    state = {
        books: []
    }

    search = searchText => {
        BooksAPI.search(searchText)
            .then(this.onSearchResults);
    }

    onSearchResults = results => {
        if (Array.isArray(results)) {
            this.setState({ books: results });
        } else {
            this.setState({ books: [] });
        }
    }
    
    handleSearchChange = e => {
        if (e.target.value.length > 2) {
            this.search(e.target.value);
        }
    }

    render() {
        return (
            <div className="search-books">
                <BookSearchBar onSearchChange={this.handleSearchChange} />
                <div className="search-books-results">
                <BookList shelfOptions={SHELFS} books={this.state.books}/>
                </div>
            </div>
        );
    }
}

export default BookSearch;