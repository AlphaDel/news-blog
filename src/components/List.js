import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Logo from '../assets/Logo_White.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const CardWrapper = styled.div`
  margin: 10px;
  flex: 1 0 25%;
  max-height: 250px;
  max-width: 340px;
`

const List = ({ items = [] }) => {
  return (
    <div>
      <Container>
        {
          items.map((item) => (
            <CardWrapper key={item.id}>
              <Link to={`/article/${item.id}`}>
                <Card
                  title={item.webTitle}
                  image={item.fields?.thumbnail || Logo}
                />
              </Link>
            </CardWrapper>
          ))
        }
      </Container>
    </div>
  )
}

export default List
