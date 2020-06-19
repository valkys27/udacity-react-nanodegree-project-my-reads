import React from 'react'
import PropTypes from 'prop-types';

class BookListItem extends React.Component {

    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        authors: PropTypes.arrayOf(PropTypes.string),
        imageLinks: PropTypes.arrayOf(
            PropTypes.shape({
                thumbnail: PropTypes.string
            })
        )
    }

    render() {
        const { id, title, authors, imageLinks, shelfOptions } = this.props;
        return (
            <li key={id}>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks.thumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                    <select>
                        <option value="move" disabled>Move to...</option>
                        {Object.keys(shelfOptions).map((code) => (
                            <option value={code}>{shelfOptions[code]}</option>
                        ))}
                        <option value="none">None</option>
                    </select>
                    </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
            </li>
        )
    }
}

export default BookListItem;