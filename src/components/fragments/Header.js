import React, { useCallback, useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import SearchBar from '../../containers/SearchBar'
import logo from '../../assets/Logo_White.png'
import { SearchContext } from '../../context/search-context'

const HeaderWrapper = styled.div`
  background-color: rgb(9, 53, 123);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;

  @media only screen and (max-width: 768px) {
    height: 60px;
    align-items: flex-end;
  }
`

const LogoWrapper = styled.div`
  margin: auto 100px;

  @media only screen and (max-width: 768px) {
    margin: auto 15px;
  }
`

const LogoImg = styled.img`
  max-width: 100px;
  height: auto;
	cursor: pointer;
  @media only screen and (max-width: 768px) {
    max-width: 50px;
  }
`

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 100px;
  @media only screen and (max-width: 768px) {
    margin-right: 0;
  }
`

const Header = () => {
  const { searchHandler } = useContext(SearchContext)
  const history = useHistory()
  const handleClick = useCallback(() => {
    searchHandler('')
    history.push('/')
  }, [history, searchHandler])
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