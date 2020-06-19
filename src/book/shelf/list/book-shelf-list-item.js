import React from 'react';
import PropTypes from 'prop-types';
import BookList from '../../list/book-list';

class BookShelfListItem extends React.Component {

    static propTypes = {
        shelfOptions: PropTypes.arrayOf(PropTypes.string),
        code: PropTypes.string,
        books: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                authors: PropTypes.arrayOf(PropTypes.string),
                shelf: PropTypes.string,
                imageLinks: PropTypes.arrayOf(
                    PropTypes.shape({
                        thumbnail: PropTypes.string
                    })
                )
            })
        )
    }

    render() {
        const { shelfOptions, code, books } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfOptions[code]}</h2>
                <div className="bookshelf-books">
                    <BookList shelfOptions={shelfOptions} books={books}/>
                </div>
            </div>
        );
    }
}

export default BookShelfListItem;