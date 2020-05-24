import React from 'react'
import { useQuery } from '@apollo/react-hooks'
// import { getBooksQuery } from '../queries/queries'

const BookDetails = () => {
  const { loading, data } = useQuery(getBooksQuery)

  return (
    <div id="book-details">
      <p>Output book details here</p>
    </div>
  )
}

export default BookDetails
