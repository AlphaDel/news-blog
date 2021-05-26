import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import SearchBar from '../../containers/SearchBar'
import logo from '../../assets/Logo_White.png'

const HeaderWrapper = styled.div`
  background-color: rgb(9, 53, 123);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
`

const LogoWrapper = styled.div`
  margin: auto 100px;
`

const LogoImg = styled.img`
  max-width: 100px;
  height: auto;
	cursor: pointer;
`

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 100px;
`

const Header = () => {
  const history = useHistory()
  const handleClick = useCallback(() => history.push('/'), [history])
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoImg src={logo} alt="Logo" onClick={handleClick} />
      </LogoWrapper>
      <SearchBarWrapper>
        <SearchBar /> 
      </SearchBarWrapper>
    </HeaderWrapper>
  )
}

export default Header