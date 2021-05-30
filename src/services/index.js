import axios from 'axios'
import { transformFilter } from '../utils'

const baseURL = 'https://content.guardianapis.com'
const apiKey = process.env.REACT_APP_GUARDIAN_API_KEY
const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
})

export const getArticles = (query = '', filters = {}) => {
  const filtersQuery = transformFilter(filters)
  return axiosInstance.get(`/search?api-key=${apiKey}${query ? '&q=' + query : ''}${filtersQuery}`)
}

export const getArticleDetail = (id = '', filters = {}) => {
  const filtersQuery = transformFilter(filters)
  return axiosInstance.get(`/${id}?api-key=${apiKey}${filtersQuery}`)
}