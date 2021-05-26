import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  padding: 1rem 0;
  background-color: rgb(9, 53, 123);
  // position absolute;
  // bottom: 0;
  // left: 0;
  width: 100%;
  height: 150px;
`

const Footer = ({ children }) => {
  return (
    <FooterWrapper>{children}</FooterWrapper>
  )
}

export default Footer