import React, { useState, useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
import useFetch from '../hooks/use-fetch'
import List from '../components/List'
import Loading from '../components/Loading'
import HeaderGroup from '../components/HeaderGroup'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    margin-top: 5px;
  }
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
      rootMargin: '0px',
      threshold: 1.0
    }
    const observer = new IntersectionObserver(observerHandler, options)
    if (loader.current) observer.observe(loader.current)
    return () => {
      if (loader.current) observer.unobserve(loader.current)
    }
  }, [observerHandler])

  return (
    <div>
      <HeaderGroup>Search result</HeaderGroup>
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