import React from 'react'
import { Link } from 'react-router-dom'
import './TopStories.css'
import styled from 'styled-components'
import Card from './Card'
import Logo from '../assets/Logo_White.png'
import HeaderGroup from './HeaderGroup'

const ContainerWrapper = styled.div`
  overflow-y: hidden;
`

const getBottomColor = (index) => {
  if (index === 2) return {borderBottomColor: '#f2c833'}  // yellow : top right
  if (index === 3) return {borderBottomColor: '#548def'}  // blue   : bottom left
  if (index === 4) return {borderBottomColor: '#528e42'}  // green  : bottom right
  return
}

const getShowHeadline = (index) => [0, 5, 6, 7].includes(index)

const TopStories = ({ articles = [] }) => {

  return (
    <ContainerWrapper>
      <HeaderGroup>Top stories</HeaderGroup>
      <div className="grid-container">
        {
          articles.map((article, index) => (
            <div className={`item-${index + 1}`} key={article.id}>
              <Link to={`/article/${article.id}`}>
                <Card
                  title={article.webTitle}
                  image={article.fields?.thumbnail || Logo}
                  isShowDefaultImg={!article.fields?.thumbnail}
                  isShowImage={index !== 3 && index !== 4}
                  style={getBottomColor(index)}
                  headline={getShowHeadline(index) ? article.fields?.trailText : undefined}
                />
              </Link>
            </div>
            
          ))
        }
      </div>
    </ContainerWrapper>
  )
}

export default TopStories
