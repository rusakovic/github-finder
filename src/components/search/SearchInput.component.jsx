import React, { useState, useContext } from 'react'
import CardsContext from '../../context/cards-context'

const SearchInput = () => {
  const { setSearchRequest } = useContext(CardsContext)

  // Input search field state
  const [ searchInput, setSearchInput ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchRequest(searchInput)

    // Clear search input value
    setSearchInput("")
  }

  return (
    <div className="content-container">
      <div className="search-input">
        <div className="input-group__item">
          <form onSubmit={handleSubmit}>
            <input 
              className="text-input"
              type="text"
              placeholder="Search GitHub repositories"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
            />
            <button 
              type="submit" 
              value="Search"
              className="button"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export { SearchInput as default }