import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import BookmarkButton from './BookmarkButton'
import OrderBy from '../containers/OrderBy'

const Title = styled.div`
  font-weight: bold;
  font-size: 26px;
  margin: auto 0;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-column-gap: 10px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    grid-row-gap: 5px;
  }
`

const LinkWrapper = styled(Link)`
  text-decoration: none;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const HeaderGroup = ({ children }) => {
  return (
    <GroupWrapper>
      <Title>{children}</Title>
      <ActionWrapper>
        <LinkWrapper to={'/bookmarks'}>
          <BookmarkButton>VIEW BOOKMARK</BookmarkButton>
        </LinkWrapper>
        <OrderBy />
      </ActionWrapper>
    </GroupWrapper>
  )
}

export default HeaderGroup