import React from 'react'
import styled from 'styled-components'
import bookmarkIcon from '../assets/bookmarkon-icon.svg'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: max-content;
  color: #fff;
  background-color: rgb(9, 53, 123);
  border-radius: 3px;
  border: none;
  padding: 8px 10px;
  cursor: pointer;
  outline: 0;
  font-size: 12px;
  
  @media only screen and (max-width: 768px) {
    font-size: 8px;
    height: 3em;
  }
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