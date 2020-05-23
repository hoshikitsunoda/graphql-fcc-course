import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

const AddBook = () => {
  const { loading, data } = useQuery(getAuthorsQuery)

  if (loading) return <div>Loading authors...</div>

  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select author</option>
          {data.authors.map((author) => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            )
          })}
        </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default AddBook
