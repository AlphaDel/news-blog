import React from 'react'
import searchIcon from '../assets/search-icon.svg'
import './SearchInput.css'

const SearchInput = ({ onchangeHandler, value }) => {

  return (
    <div className="search-container">
      <input
        className="search expand-right"
        id="search-right"
        type="search"
        placeholder="Search all news"
        onChange={(e) => onchangeHandler(e.target.value)}
        value={value}
      />
      <label className="button search-button" htmlFor="search-right"><img src={searchIcon} alt="search-icon"></img></label>
    </div>
  )
}

export default SearchInput