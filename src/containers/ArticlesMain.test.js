import React from 'react'
import { Router } from 'react-router-dom'
import { render, screen, waitFor, act } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import ArticlesMain from './ArticlesMain'

describe('renders', () => {
 
  beforeEach(() => {
  
  })

  afterEach(() => {
    
  })

  test('should renders loading while fetching data', () => {
    render(<ArticlesMain />)
    const loadingElement = screen.getByText(/Loading.../i)
    expect(loadingElement).toBeInTheDocument()
  })

  test('should show list page when fetch data is done', async () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <ArticlesMain />
      </Router>
    )

    await waitFor(() => {
      expect(screen.getByText('Top stories')).toBeTruthy()
      expect(screen.getByText('Sports')).toBeTruthy()
      expect(screen.getByText('Cultures')).toBeTruthy()
      expect(screen.getAllByText('test-1')[0]).toBeInTheDocument()
      expect(screen.getAllByText('test-2')[0]).toBeInTheDocument()
    })
  })
})