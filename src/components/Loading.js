import React from 'react'
import styled from 'styled-components'
import './Loading.css'

const LoadingWrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 240px;
  height: 240px;
  float: left;
  position: relative;
  overflow: hidden;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 auto;
`

const Loading = () => {
  return (
    <LoadingWrapper>
     <div className="loader">Loading...</div>
    </LoadingWrapper>
  )
}

export default Loading