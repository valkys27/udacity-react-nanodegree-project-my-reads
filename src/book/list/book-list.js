import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from './book-list.item';

class BooksList extends React.Component {

    static propTypes = {
        shelfOptions: PropTypes.arrayOf(PropTypes.string),
        books: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                authors: PropTypes.arrayOf(PropTypes.string),
                imageLinks: PropTypes.arrayOf(
                    PropTypes.shape({
                        thumbnail: PropTypes.string
                    })
                )
            })
        )
    }

    render() {
        const { shelfOptions, books } = this.props;
        return (
            <ol className="books-grid">
                {books.map((book) => ( <BookListItem {...book} shelfOptions={shelfOptions} /> ))}
            </ol>
        );
    }

}

export default BooksList;