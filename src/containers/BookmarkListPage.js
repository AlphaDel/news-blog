import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BookmarkContext } from '../context/bookmark-context'
import { OrderContext } from '../context/order-context'
import List from '../components/List'
import OrderBy from './OrderBy'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`

const BookmarkListPage = () => {
  const [bookmarks, setBookmarks] = useState([])
  const { bookmarks: bookmarksContext } = useContext(BookmarkContext)
  const { orderBy } = useContext(OrderContext)

  useEffect(() => {
    const itemsSorted = [...bookmarksContext].sort((a, b) => {
      const publicDateA = new Date(a.webPublicationDate).getTime()
      const publicDateB = new Date(b.webPublicationDate).getTime()
      if (orderBy === 'newest') return publicDateB - publicDateA
      if (orderBy === 'oldest') return publicDateA - publicDateB
      if (orderBy === 'relevance') return b.fields?.score - a.fields?.score
      return 0
    })
    setBookmarks(itemsSorted)
  }, [bookmarksContext, orderBy])

  return (
    <div>
      <Container>
        <Title>All bookmark</Title>
        <OrderBy />
      </Container>
      <List items={bookmarks} />
    </div>
  )
}

export default BookmarkListPage
