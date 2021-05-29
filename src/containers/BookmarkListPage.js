import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BookmarkContext } from '../context/bookmark-context'
import { OrderContext } from '../context/order-context'
import { SearchContext } from '../context/search-context'
import useDebounce from '../hooks/use-debounce'
import List from '../components/List'
import OrderBy from './OrderBy'

const ContainerWrapper = styled.div`
  margin: 0 10px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 26px;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const Warning = styled.div`
  margin-top: 10%;
`

const BookmarkListPage = () => {
  const [bookmarks, setBookmarks] = useState([])
  const { bookmarks: bookmarksContext } = useContext(BookmarkContext)
  const { orderBy } = useContext(OrderContext)
  const { query } = useContext(SearchContext)
  const debouncedSearch = useDebounce(query, 500)

  useEffect(() => {
    let result = []
    result = [...bookmarksContext].sort((a, b) => {
      const publicDateA = new Date(a.webPublicationDate).getTime()
      const publicDateB = new Date(b.webPublicationDate).getTime()
      if (orderBy === 'newest') return publicDateB - publicDateA
      if (orderBy === 'oldest') return publicDateA - publicDateB
      if (orderBy === 'relevance') return b.fields?.score - a.fields?.score
      return 0
    })
    if (debouncedSearch !== '') {
      result = result.filter(bookmark => 
        bookmark.webTitle.toLowerCase().search(debouncedSearch.toLowerCase()) !== -1
      )
    }
    
    setBookmarks(result)
  }, [debouncedSearch, bookmarksContext, orderBy])

  return (
    <ContainerWrapper>
      <Container>
        <Title>All bookmark</Title>
        <OrderBy />
      </Container>
      <ResultWrapper>
        {
          bookmarks.length > 0 ?
          <List items={bookmarks} /> :
          <Warning>Data not found.</Warning>
        }
      </ResultWrapper>
    </ContainerWrapper>
  )
}

export default BookmarkListPage
