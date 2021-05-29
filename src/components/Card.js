import React from 'react'
import styled from 'styled-components'
import './Card.css'

const CardWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  height: 100%;
  background-color: #0d47a1;
  border-bottom: 2px solid ${props => props.style.borderBottomColor};

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

const CardContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const CardImage = styled.img`
  width: 100%;
  height: ${props => props.isShowDefaultImg ? '50%' : 'inherit'};

`

const TitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  background-color: #0b3573;
  opacity: 0.8;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin: 5px;
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.headline ? '2' : '3'};
  -webkit-box-orient: vertical;  
  overflow: hidden;
`

const Headline = styled.div`
  font-size: 14px;
  color: #fff;
  margin: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const Card = ({ title = '', headline = '', isShowImage = true, image, isShowDefaultImg = false, style = { borderBottomColor: '#be4435' } }) => {
  return (
    <CardWrapper style={style}>
      <CardContent>
        {isShowImage && <CardImage src={image} isShowDefaultImg={isShowDefaultImg} />}
        <TitleWrapper>
          <Title dangerouslySetInnerHTML={{ __html: title }} />
          {headline && <Headline dangerouslySetInnerHTML={{ __html: headline }}/> }
        </TitleWrapper>
      </CardContent>
    </CardWrapper>
  )
}

export default Card
