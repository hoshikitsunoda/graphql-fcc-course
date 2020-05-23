import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getBooksQuery } from '../queries/queries'

const BookList = () => {
  const { loading, data } = useQuery(getBooksQuery)

  const displayBooks = () => {
    return loading ? (
      <div>Loading books...</div>
    ) : (
      data.books.map((book) => {
        return <li key={book.id}>{book.name}</li>
      })
    )
  }

  return (
    <div id="main">
      <ul id="book-list">{displayBooks()}</ul>
    </div>
  )
}

export default BookList
