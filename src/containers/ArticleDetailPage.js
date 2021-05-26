import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { getArticleDetail as requestGetArticleDetail } from '../services'
import Bookmark from './Bookmark'
import Loading from '../components/Loading'

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
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
  margin-top: 60px;
  img {
    max-width: 600px;
    width: 100%;
    height: auto;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ArticleDetailPage = (props) => {
  const [articleDetail, setArticleDetail] = useState({})
  const [isMounted, setIsMounted] = useState(false)
  const { sectionId, publicYear, publicMonth, publicDay, slug } = props.match?.params || {}
  const id = `${sectionId}/${publicYear}/${publicMonth}/${publicDay}/${slug}`
  useEffect(() => {
    window.scrollTo(0, 0);
    const getArticleDetail = async () => {
      try {
        const { data } = await requestGetArticleDetail(id, {
          showFields: 'all',
          showElements: 'all'
        })
        setArticleDetail(data.response.content)
        setIsMounted(true)
      } catch (error) {
        console.error(error)
      }
    }
    
    getArticleDetail()
    
    return () => {
      setIsMounted(false)
    }
  }, [id])

  return (
    <div>
      <ContainerWrapper>
        {
          isMounted ?
          (
            <>
              <div>
                <Bookmark articleDetail={articleDetail} />
              </div>
              <ContentWrapper>
                <ArticleContent>
                  <div>{dayjs(articleDetail.webPublicationDate).format('ddd D MMM YYYY HH:mm').toUpperCase()}</div>
                  <h1>{articleDetail.webTitle}</h1>
                  <h2>{articleDetail.fields?.headline}</h2>
                  <hr/>
                  <div dangerouslySetInnerHTML={{ __html: articleDetail.fields?.body }} />
                </ArticleContent>
                <ArticleImage>
                  <div dangerouslySetInnerHTML={{ __html: articleDetail.fields?.main }} />
                </ArticleImage>
              </ContentWrapper>
            </>
          ) :
          <Loading />
          
    }
      </ContainerWrapper>
          
      
    </div>
  )
}

export default ArticleDetailPage

