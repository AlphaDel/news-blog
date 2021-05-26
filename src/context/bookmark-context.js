import React, { useState } from 'react'

export const BookmarkContext = React.createContext({
  bookmarks: [],
  bookmarkHandler: () => {},
})

const BookmarkContextProvider = (props) => {
  const [bookmarks, setBookmarks] = useState([])
  const bookmarkHandler = (value) => {
    const bookmarksTemp = [...bookmarks]
    const index = bookmarksTemp.findIndex(bookmark => bookmark.id === value.id)
    if (index === -1) {
      setBookmarks([...bookmarks, value])
    } else {
      bookmarksTemp.splice(index, 1)
      setBookmarks(bookmarksTemp)
    }
  }
  
  return (
    <BookmarkContext.Provider value={{ bookmarks, bookmarkHandler }}>
      {props.children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkContextProvider