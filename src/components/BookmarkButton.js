import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bookmarkIcon from '../assets/bookmarkon-icon@2x.svg'

const LinkWrapper = styled(Link)`
  text-decoration: none;
  margin-right: 20px;
`

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

const BookmarkButton = () => {
  
  return (
    <LinkWrapper to={'/bookmarks'}>
      <Button><img src={bookmarkIcon} alt="bookmark-icon" style={{ marginRight: '5px' }} />View Bookmark</Button>
    </LinkWrapper>
  )
}

export default BookmarkButton