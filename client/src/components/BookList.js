import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getBooksQuery } from '../queries/queries'

import BookDetails from './BookDetails'

const BookList = () => {
  const { loading, data } = useQuery(getBooksQuery)
  const [selected, setState] = useState(null)

  const displayBooks = () => {
    return loading ? (
      <div>Loading books...</div>
    ) : (
      data.books.map((book) => {
        return (
          <li key={book.id} data-book-id={book.id} onClick={handleClick}>
            {book.name}
          </li>
        )
      })
    )
  }

  const handleClick = (event) => {
    setState(event.target.getAttribute('data-book-id'))
  }

  return (
    <div id="main">
      <ul id="book-list">{displayBooks()}</ul>
      <BookDetails bookId={selected} />
    </div>
  )
}

export default BookList
