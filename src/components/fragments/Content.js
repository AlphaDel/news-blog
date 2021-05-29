import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  min-height: calc(100vh - 150px);
  max-width: 1200px;
  margin: 40px auto;
  position: relative;

  @media only screen and (max-width: 768px) {
    margin: 10px auto;
    min-height: calc(100vh - 130px);
  }
`

const Content = ({ children }) => {
  return (
    <ContentWrapper>{children}</ContentWrapper>
  )
}

export default Content