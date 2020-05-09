import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import BookShelfList from './book/shelf/list/book-shelf-list'
import BookSearch from './book/search/book-search'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/'>
          <BookShelfList/>
        </Route>
        <Route path='/search'>
          <BookSearch />
        </Route>
      </div>
    )
  }
}

export default BooksApp
