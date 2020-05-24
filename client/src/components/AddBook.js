import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getAuthorsQuery } from '../queries/queries'

const AddBook = () => {
  const { loading, data } = useQuery(getAuthorsQuery)
  const [bookData, setState] = useState({
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

  const handleChange = (event) => {
    setState({ ...bookData, [event.target.name]: event.target.value })
  }

  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input name="name" type="text" onChange={handleChange} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input name="genre" type="text" onChange={handleChange} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select name="authorId" onChange={handleChange}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default AddBook
