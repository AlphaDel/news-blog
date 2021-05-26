import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: #000;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid gray;
  margin-left: 10px;
  outline: none;
  width: 175px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`

const OrderBySelect = ({ orderBy, orderByHandler }) => {
  return (
    <div>
      <Select value={orderBy} onChange={(e) => orderByHandler(e.target.value)}>
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
        <option value="relevance">Most popular</option>
      </Select>
    </div>
  )
}

export default OrderBySelect