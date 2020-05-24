import React from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from '../queries/queries'

const BookDetails = (props) => {
  const { book } = props.data

  const displayBookDetails = () => {
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>
            })}
          </ul>
        </div>
      )
    } else {
      return <div>No book selected...</div>
    }
  }

  return <div id="book-details">{displayBookDetails()}</div>
}

const BookDetailsQuery = graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId,
      },
    }
  },
})(BookDetails)

export default BookDetailsQuery
