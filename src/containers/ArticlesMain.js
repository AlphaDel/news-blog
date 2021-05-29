import React, { useContext } from 'react'
import styled from 'styled-components'
import ArticleListPage from './ArticleListPage'
import SearchResult from './SearchResult'
import { SearchContext } from '../context/search-context'
import { OrderContext } from '../context/order-context'

const ContainerWrapper = styled.div`
  position: relative;
  margin: 0 10px;
`

const ArticlesMain = () => {
  const { query } = useContext(SearchContext)
  const { orderBy } = useContext(OrderContext)
  
  return (
    <ContainerWrapper>
      {
        !query ?
          <ArticleListPage query={query} orderBy={orderBy} /> :
          <SearchResult query={query} orderBy={orderBy}/>
      }
    </ContainerWrapper>
  )
}

export default ArticlesMain

