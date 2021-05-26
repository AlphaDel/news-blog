import React, { useState, useContext, useEffect } from 'react'
import { BookmarkContext } from '../context/bookmark-context'

const Bookmark = ({ articleDetail }) => {
  const {
    bookmarks: bookmarksContext,
    bookmarkHandler: bookmarkHandlerContext,
  } = useContext(BookmarkContext)
  
  const [isAddedBookmark, setIsAddedBookmark] = useState(false)

  useEffect(() => {
    const isFoundInBookmark = bookmarksContext.find(bookmark => bookmark.id === articleDetail.id)
    isFoundInBookmark ? setIsAddedBookmark(true) : setIsAddedBookmark(false)
  }, [articleDetail.id, bookmarksContext])

  const bookmarkHandler = (value) => {
    setIsAddedBookmark(!isAddedBookmark)
    bookmarkHandlerContext(value)
  }
  
  return (
    <div>
      <button onClick={() => bookmarkHandler(articleDetail)}>{isAddedBookmark ? 'Added' : 'Add bookmark'}</button>
    </div>
  )
}

export default Bookmark