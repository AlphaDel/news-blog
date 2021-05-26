import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import useDebounce from '../context/use-debounce'
import { getArticles as requestGetArticles } from '../services'
import List from '../components/List'
import Loading from '../components/Loading'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Title = styled.div`
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 20px;
`

const SearchResult = ({ query, orderBy }) => {
  const [articles, setArticles] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const debouncedSearch = useDebounce(query, 500)
  useEffect(() => {
    const fetchSearchArticles = async () => {
      try {
        const { data } = await requestGetArticles(query, {
          orderBy,
          section: 'news',
          pageSize: 15,
          showFields: 'thumbnail',
        })
        setArticles(data.response.results)
        setIsLoaded(true)
      } catch (error) {
        console.error(error)
      }
    }
    fetchSearchArticles()
    return () => {
      setIsLoaded(false)
    }
  }, [debouncedSearch, orderBy])
  return (
    <div>
      <Title>Search result</Title>
      <Container>
        {
          isLoaded ?
            <List items={articles} /> :
            <Loading />
        }
      </Container>
    </div>
  )
}

export default SearchResult