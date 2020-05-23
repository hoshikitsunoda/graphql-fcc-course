import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

const BookList = () => {
  const { loading, data } = useQuery(getBooksQuery)

  if (loading) return <div>Loading books...</div>

  return (
    <div id="main">
      <ul id="book-list">
        {data.books.map((book) => {
          return <li key={book.id}>{book.name}</li>
        })}
      </ul>
    </div>
  )
}

export default BookList
