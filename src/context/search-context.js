import React, { useState } from 'react'

export const SearchContext = React.createContext({
  query: '',
  searchHandler: () => {},
})

const SearchContextProvider = (props) => {
  const [query, setQuery] = useState('')
  const searchHandler = (query) => {
    setQuery(query)
  }

  return (
    <SearchContext.Provider value={{ query, searchHandler }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
