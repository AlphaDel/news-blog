import React, { useState } from 'react'

export const OrderContext = React.createContext({
  orderBy: '',
  orderByHandler: () => {},
})

const OrderContextProvider = (props) => {
  const [orderBy, setOrderBy] = useState('newest')
  const orderByHandler = (sort) => {
    setOrderBy(sort)
  }

  return (
    <OrderContext.Provider value={{ orderBy, orderByHandler }}>
      {props.children}
    </OrderContext.Provider>
  )
}

export default OrderContextProvider
