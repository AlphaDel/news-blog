import React, { useContext } from 'react'
import { SearchContext } from '../context/search-context'
import SearchInput from '../components/SearchInput'

const SearchBar = () => {
  const { query, searchHandler } = useContext(SearchContext)

  const searchQueryHandler = (value) => {
    searchHandler(value)
  }

  return (
    <SearchInput onchangeHandler={searchQueryHandler} value={query} />
  )
}

export default SearchBar
