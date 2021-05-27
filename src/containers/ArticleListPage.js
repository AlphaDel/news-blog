import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './ArticleListPage.css'
import { getArticles as requestGetArticles } from '../services'
import useDebounce from '../hooks/use-debounce'
import TopStories from '../components/TopStories'
import ArticleCategory from './ArticleCategory'
import Loading from '../components/Loading'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const ArticleListPage = ({ query, orderBy }) => {
  const [articles, setArticles] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [articlesByCategory, setArticlesByCategory] = useState([])
  const debouncedSearch = useDebounce(query, 500)

  useEffect(() => {
    const fetchDefaultArticles = async () => {
      try {
        const { data: articleTopStories } = await requestGetArticles(query, {
          orderBy,
          section: 'news',
          pageSize: 8,
          showFields: 'thumbnail',
        })
        setArticles(articleTopStories.response.results)
        const { data: articleByMultipleSections } = await requestGetArticles(query, {
          orderBy,
          section: 'sport|culture|lifeandstyle',
          pageSize: 20,
          showFields: 'thumbnail,trailText',
        })
        setArticlesByCategory(articleByMultipleSections.response.results)
        setIsLoaded(true)
      } catch (error) {
        console.error(error)
      }
    }
    
    if (debouncedSearch === '') {
      fetchDefaultArticles()
    }

    return () => {
      setIsLoaded(false)
    }
  }, [debouncedSearch, orderBy])
  
  return (
    <Container>
      {
        isLoaded ?
          (
            <>
              <TopStories articles={articles} />
              <ArticleCategory articlesByCategory={articlesByCategory} />
            </>
          ) :
          <Loading />
      }
      
    </Container>
  )
}

export default ArticleListPage
