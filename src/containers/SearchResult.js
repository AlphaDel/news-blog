import React, { useState, useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
import useFetch from '../hooks/use-fetch'
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

const Warning = styled.div`
  margin-top: 10%;
`

const SearchResult = ({ query, orderBy }) => {
  const [page, setPage] = useState(1)
  const { list, loading, hasError } = useFetch({ query, page, orderBy })
  const loader = useRef(null)

  const observerHandler = useCallback((entries) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setPage((prev) => prev + 1)
    }
  }, [])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0
    }
    const observer = new IntersectionObserver(observerHandler, options)
    if (loader.current) observer.observe(loader.current)
    return () => {
      if (loader.current) observer.unobserve(loader.current)
    }
  }, [observerHandler])

  return (
    <div>
      <Title>Search result</Title>
      <Container>
        <List items={list} />
        {!loading && list.length <= 0 && !hasError && <Warning>Data not found.</Warning>}
        {loading && !hasError && <Loading />}
        {hasError && <Warning>Service is unavailable please try again.</Warning>}
        <div ref={loader} />
      </Container>
    </div>
  )
}

export default SearchResult