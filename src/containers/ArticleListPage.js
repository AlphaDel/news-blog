import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
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
    let mounted = true
    const fetchDefaultArticles = async () => {
      try {
        const { data: articleTopStories } = await requestGetArticles(query, {
          orderBy,
          section: 'news',
          pageSize: 8,
          showFields: 'thumbnail,trailText',
        })

        const { data: articleByMultipleSections } = await requestGetArticles(query, {
          orderBy,
          section: 'sport|culture|lifeandstyle',
          pageSize: 20,
          showFields: 'thumbnail,trailText',
        })
        if (mounted) {
          setArticles(articleTopStories.response.results)
          setArticlesByCategory(articleByMultipleSections.response.results)
          setIsLoaded(true)
        }
      } catch (error) {
        console.error(error)
      }
    }
    
    if (debouncedSearch === '') {
      fetchDefaultArticles()
    }

    return () => {
      setIsLoaded(false)
      mounted = false
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
