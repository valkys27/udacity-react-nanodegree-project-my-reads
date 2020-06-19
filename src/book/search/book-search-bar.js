import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BookSearchBar extends React.Component {

    static propTypes = {
        onSearchChange: PropTypes.func
    }

    render() {
        return (
            <div className="search-books-bar">
                <Link to='/' className='close-search'/>
                <div className="search-books-input-wrapper">
                    {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input type="text" onChange={this.props.onSearchChange} placeholder="Search by title or author"/>
                </div>
            </div>
        );
    }
}

export default BookSearchBar;