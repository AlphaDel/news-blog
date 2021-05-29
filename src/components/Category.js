import React from 'react'
import styled from 'styled-components'
import List from './List'

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`

const CategoryName = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
`

const CategoryGroupItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-y: none;
  flex-wrap: wrap;
`

const mappingKey = {
  'sport': 'Sports',
  'culture': 'Cultures',
  'lifeandstyle': 'Lifestyles',
}

const Category = ({ categories = [] }) => {
  return (
    <div>
      {
        Object.keys(categories).map((key) => (
          <CategoryContainer key={key}>
            <CategoryName>{mappingKey[key] || 'None'}</CategoryName>
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

