import React from 'react'
import { Link } from 'react-router-dom'
import './TopStories.css'
import styled from 'styled-components'
import Card from './Card'
import Logo from '../assets/Logo_White.png'

const ContainerWrapper = styled.div`
  overflow-y: auto;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 20px;
`

const TopStories = ({ articles = [] }) => {
  return (
    <ContainerWrapper>
      <Title>Top stories</Title>
      <div className="grid-container">
        {
          articles.map((article, index) => (
            <div className={`item-${index + 1}`} key={article.id}>
              <Link to={`/article/${article.id}`}>
                <div>
                  <Card title={article.webTitle} image={article.fields?.thumbnail || Logo} />
                </div>
              </Link>
            </div>
            
          ))
        }
      </div>
    </ContainerWrapper>
  )
}

export default TopStories
