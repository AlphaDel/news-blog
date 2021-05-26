import React from 'react'
import styled from 'styled-components'
import List from './List'

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const CategoryName = styled.div`
  font-weight: bold;
`

const CategoryGroupItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-y: none;
  flex-wrap: wrap;
  border: 1px solid red;
`

const Category = ({ categories = [] }) => {
  return (
    <div>
      {
        Object.keys(categories).map((key) => (
          <CategoryContainer key={key}>
            <CategoryName>{key}</CategoryName>
            <CategoryGroupItem>
              <List items={categories[key]} />
            </CategoryGroupItem>
          </CategoryContainer>
      ))
      }
    </div>
  )
}

export default Category

