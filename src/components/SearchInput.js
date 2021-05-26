import React from 'react'
import styled from 'styled-components'
import searchIcon from '../assets/search-icon@2x.svg'
import './SearchInput.css'

const InputWrapper = styled.div`
  width: 0%;
  min-width: 60px;
  height: 60px;
  float: right;
  overflow: hidden;
`

const Container = styled.div`
  position: relative;
  margin-top: 10px;
  width: 0%;
  min-width: 60px;
  height: 60px;
  float: right;
  overflow: hidden;

  -webkit-transition: width 0.3s;
  -moz-transition: width 0.3s;
  transition: width 0.3s;

  -webkit-backface-visibility: hidden;
`

const Input = styled.input`
  cursor:pointer;

  display:block;
  margin: 0 0 0 auto;
  width: 130px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url(${searchIcon});
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;

  &:focus {
    width: 100%;
  }
`

const SearchIcon = styled.span`
`

const SearchInput = ({ onchangeHandler, value }) => {

  return (
    <div>
      {/* <div>
        <input
          placeholder="Search all news"
          type="text"
          onChange={(e) => onchangeHandler(e.target.value.trim())}
          value={value}
        />
        <SearchIcon>icon</SearchIcon>
      </div> */}

    <div className="search-container">
      <input
        className="search expand-right"
        id="search-right"
        type="search"
        placeholder="Search all news"
        onChange={(e) => onchangeHandler(e.target.value.trim())}
        value={value}
      />
      <label className="button search-button" htmlFor="search-right"><img src={searchIcon} alt="search-icon"></img></label>
    </div>
    </div>

  )
}

export default SearchInput