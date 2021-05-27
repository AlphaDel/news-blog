import React, { useState } from 'react'

export const ModalContext = React.createContext({
  openModal: {
    isOpen: false,
    
  },
  openModalHandler: () => {},
})

const ModalContextProvider = (props) => {
  const [openModal, setOpenModal] = useState(false)
  const openModalHandler = (value) => {
    setOpenModal(value)
  }

  return (
    <ModalContext.Provider value={{ openModal, openModalHandler }}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
