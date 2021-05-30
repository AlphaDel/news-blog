import React from 'react'
import styled from 'styled-components'
import bookmarkRemoveIcon from '../../assets/bookmarkoff-icon.svg'
import bookmarkAddIcon from '../../assets/bookmarkon-icon.svg'


const Modal = styled.div`
  position: absolute;
  top: 45%;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 70px;
  height: 25px;
  background-color: ${props => props.isAdded ? '#388e3c' : '#d32f2f'};
  justify-content: center;
  align-items: center;
`

const Icon = styled.img`
  width: 15px;
  max-width: 15px;
  height: auto;
`

const Label = styled.label`
  color: #fff;
  margin-left: 10px;
`

const BookMarkModal = ({ isAdded }) => {

  return (
    <Modal>
      <Container isAdded={isAdded}>
        <Icon src={isAdded ? bookmarkAddIcon : bookmarkRemoveIcon} alt="bookmark-icon" />
        <Label>{isAdded ? 'SAVED TO BOOKMARKS' : 'REMOVED FROM BOOKMARKS'}</Label>
      </Container>
    </Modal>
  )
}

export default BookMarkModal