import axios from 'axios'

const baseURL = 'https://content.guardianapis.com'
const apiKey = process.env.REACT_APP_GUARDIAN_API_KEY
const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
})

export const getArticles = (query = '', filters = {}) => {
  let filter = ''
  Object.entries(filters).forEach((entry) => {
    const key = entry[0].replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
    filter = `${filter}&${key}=${entry[1]}`
  })
  return axiosInstance.get(`/search?api-key=${apiKey}${query ? '&q=' + query : ''}${filter}`)
}

export const getArticleDetail = (id = '', filters = {}) => {
  let filter = ''
  Object.entries(filters).forEach((entry) => {
    const key = entry[0].replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
    filter = `${filter}&${key}=${entry[1]}`
  })
  return axiosInstance.get(`/${id}?api-key=${apiKey}${filter}`)
}