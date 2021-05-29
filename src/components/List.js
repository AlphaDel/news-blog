import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Logo from '../assets/Logo_White.png'

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: center;
  grid-gap: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    grid-gap: 10px;
  }
`

const CardWrapper = styled.div`
  flex: 1 0 25%;
  height: 250px;
  max-height: 250px;
`

const List = ({ items = [], style }) => {
  return (
      <Container>
        {
          items.map((item) => (
            <CardWrapper key={item.id}>
              <Link to={`/article/${item.id}`}>
                <Card
                  title={item.webTitle}
                  image={item.fields?.thumbnail || Logo}
                  isShowDefaultImg={!item.fields?.thumbnail}
                  style={style}
                />
              </Link>
            </CardWrapper>
          ))
        }
      </Container>
  )
}

export default List
