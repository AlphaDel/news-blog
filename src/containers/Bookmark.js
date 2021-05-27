import React, { useState, useContext, useEffect } from 'react'
import { BookmarkContext } from '../context/bookmark-context'
import BookmarkButton from '../components/BookmarkButton'
import BookmarkModal from '../components/Modal/BookmarkModal'

const Bookmark = ({ articleDetail }) => {
  const [isAddedBookmark, setIsAddedBookmark] = useState(false)
  const [openModal, isOpenModal] = useState(false)
  const {
    bookmarks: bookmarksContext,
    bookmarkHandler: bookmarkHandlerContext,
  } = useContext(BookmarkContext)
  
  useEffect(() => {
    const isFoundInBookmark = bookmarksContext.find(bookmark => bookmark.id === articleDetail.id)
    isFoundInBookmark ? setIsAddedBookmark(true) : setIsAddedBookmark(false)
  }, [articleDetail.id, bookmarksContext])

  const bookmarkHandler = (e, value) => {
    setIsAddedBookmark(!isAddedBookmark)
    bookmarkHandlerContext(value)
    isOpenModal(true)
    
    setTimeout(() => {
      isOpenModal(false)
    }, 1500)
  }
  
  return (
    <div>
      <BookmarkButton onClickHandler={(e) => bookmarkHandler(e, articleDetail)}>
        {isAddedBookmark ? 'REMOVE BOOKMARK' : 'ADD BOOKMARK'}
      </BookmarkButton>
      {
        openModal && <BookmarkModal isAdded={isAddedBookmark} />
      }
    </div>
  )
}

export default Bookmark