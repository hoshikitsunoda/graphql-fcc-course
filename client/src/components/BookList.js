import React from 'react'
import { gql } from 'apollo-boost'

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

function BookList() {
  return (
    <div id="main">
      <ul id="book-list">
        <li>Book name</li>
      </ul>
    </div>
  )
}

export default BookList
