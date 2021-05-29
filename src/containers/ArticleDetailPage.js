import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import timezone from 'dayjs/plugin/timezone'
import { getArticleDetail as requestGetArticleDetail } from '../services'
import Bookmark from './Bookmark'
import Loading from '../components/Loading'
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Bangkok')
dayjs.extend(advancedFormat)


const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`

const ArticleContent = styled.div`
  max-width: 800px;
  img {
    max-width: 600px;
    width: 100%;
    height: auto;
  }
`

const ArticleImage = styled.div`
  margin-top: calc(16vh);
  img {
    max-width: 600px;
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const BookmarkWrapper = styled.div`
  max-width: 150px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ArticleTitleWrapper = styled.h1`
  font-size: 30px;
  
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const ArticleHeadlineWrapper = styled.h2`
  font-size: 20px;
    
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const WebPublicDateWrapper = styled.div`
  margin-top: 10px;
  font-size: 12px;
  
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`

const ArticleContentWrapper = styled.div`
  &.p {
    font-size: 18px
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const ArticleDetailPage = (props) => {
  const [articleDetail, setArticleDetail] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const url = props.location?.pathname || []
  const id = url.split('/').splice(2).join('/')
  
  useEffect(() => {
    window.scrollTo(0, 0)
    
    const getArticleDetail = async () => {
      try {
        const { data } = await requestGetArticleDetail(id, {
          showFields: 'all',
          showElements: 'all'
        })
        setArticleDetail(data.response.content)
        setIsLoaded(true)
      } catch (error) {
        console.error(error)
      }
    }
    
    getArticleDetail()
    
    return () => {
      setIsLoaded(false)
    }
  }, [id])

  return (
    <ContainerWrapper>
      {
        isLoaded ?
        (
          <>
            <BookmarkWrapper>
              <Bookmark articleDetail={articleDetail} />
            </BookmarkWrapper>
            <ContentWrapper>
              <ArticleContent>
                <WebPublicDateWrapper>{dayjs(new Date()).format('ddd D MMM YYYY HH:mm z').toUpperCase()}</WebPublicDateWrapper>
                <ArticleTitleWrapper>{articleDetail.webTitle}</ArticleTitleWrapper>
                <ArticleHeadlineWrapper>{articleDetail.fields?.headline}</ArticleHeadlineWrapper>
                <hr/>
                <ArticleContentWrapper dangerouslySetInnerHTML={{ __html: articleDetail.fields?.body }} />
              </ArticleContent>
              <ArticleImage>
                <div dangerouslySetInnerHTML={{ __html: articleDetail.fields?.main }} />
              </ArticleImage>
            </ContentWrapper>
          </>
        ) :
        <Loading />    
    }
    {
      
    }
    </ContainerWrapper>
  )
}

export default ArticleDetailPage

