import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  background-color: rgb(9, 53, 123);
  width: 100%;
  height: 150px;

  @media only screen and (max-width: 768px) {
    height: 60px;
  }
`

const Footer = ({ children }) => {
  return (
    <FooterWrapper>{children}</FooterWrapper>
  )
}

export default Footer