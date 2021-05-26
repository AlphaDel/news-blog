import React, { useState, useContext } from 'react'
import { SearchContext } from '../context/search-context'
import SearchInput from '../components/SearchInput'

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const searchContext = useContext(SearchContext)

  const searchQueryHandler = (value) => {
    setSearchQuery(value)
    searchContext.searchHandler(value)
  }

  return (
    <div>
      <SearchInput onchangeHandler={searchQueryHandler} value={searchQuery} />
      {/* <input
        placeholder="Search"
        type="text"
        onChange={(e) => searchQueryHandler(e.target.value.trim())}
        value={searchQuery}
      /> */}
    </div>
  )
}

export default SearchBar
