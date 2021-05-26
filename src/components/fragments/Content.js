import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  margin: 20px;
  min-height: calc(100vh - 150px);
`

const Content = ({ children }) => {
  return (
    <ContentWrapper>{children}</ContentWrapper>
  )
}

export default Content