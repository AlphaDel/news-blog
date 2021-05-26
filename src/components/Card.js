import React from 'react'
import styled from 'styled-components'
import './Card.css'

const CardWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
  height: 100%;
  background-color: #0d47a1;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

const CardContainer = styled.div`

`

const CardContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const CardImage = styled.img`
  width: 100%;
  height: inherit;
`

const TitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  background-color: #0b3573;
  opacity: 0.8;
`

const Label = styled.div`
  font-weight: bold;
  color: #fff;
  margin: 5px;
`


const Card = ({ title, image }) => {
  return (
    <CardWrapper>
      <CardContent>
        <CardImage src={image} />
        <TitleWrapper>
          <Label>{title}</Label>
        </TitleWrapper>
      </CardContent>
    </CardWrapper>
  )
}

export default Card
