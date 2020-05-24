import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'
import { getAuthorsQuery, addBookMutation } from '../queries/queries'

const AddBook = () => {
  const { loading, data } = useQuery(getAuthorsQuery)
  const [addBookAction] = useMutation(addBookMutation)
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

  const submitForm = (event) => {
    event.preventDefault()
    addBookAction()
  }

  return (
    <form id="add-book" onSubmit={submitForm}>
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

const AddBookQuery = compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook)

export default AddBookQuery
