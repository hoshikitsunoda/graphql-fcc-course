import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getAuthorsQuery } from '../queries/queries'

const AddBook = () => {
  const { loading, data } = useQuery(getAuthorsQuery)
  const [bookData, setData] = useState({
    name: '',
    genre: '',
    authorId: '',
  })

  const displayAuthors = () => {
    return loading ? (
      <option>Loading authors...</option>
    ) : (
      data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        )
      })
    )
  }

  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          onChange={(event) => setData({ name: event.target.value })}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          onChange={(event) => setData({ genre: event.target.value })}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={(event) => setData({ authorId: event.target.value })}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default AddBook
