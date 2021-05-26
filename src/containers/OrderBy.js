import React, { useState, useContext } from 'react'
import { OrderContext } from '../context/order-context'
import OrderBySelect from '../components/OrderBySelect'

const OrderBy = () => {
  const {
    orderBy: orderByContext,
    orderByHandler: orderByHandlerContext
  } = useContext(OrderContext)
  const [orderBy, setOrderBy] = useState(orderByContext)

  const orderByHandler = (value) => {
    setOrderBy(value)
    orderByHandlerContext(value)
  }

  return (
    <OrderBySelect orderBy={orderBy} orderByHandler={orderByHandler} />
  )
}

export default OrderBy
