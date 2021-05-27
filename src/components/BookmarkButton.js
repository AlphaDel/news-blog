import React from 'react'
import styled from 'styled-components'
import bookmarkIcon from '../assets/bookmarkon-icon@2x.svg'

const Button = styled.button`
  display: flex;
  height: 30px;
  color: #fff;
  background-color: rgb(9, 53, 123);
  border-radius: 3px;
  border: none;
  padding: 8px 10px;
  cursor: pointer;
  outline: 0;
`

const BookmarkButton = ({ children, onClickHandler = fn => fn }) => {
  
  return (
    <Button onClick={(e) => onClickHandler(e)}>
      <img src={bookmarkIcon} alt="bookmark-icon" style={{ marginRight: '5px' }} />
      {children}
    </Button>
  )
}

export default BookmarkButton