import axios from 'axios'

const baseURL = 'https://content.guardianapis.com'
const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
})

const apiKey = process.env.REACT_APP_GUARDIAN_API_KEY

//https://content.guardianapis.com/search?show-fields=thumbnail%2CbodyText&section=news&q=news&api-key=test

export const searchArticles = (query = '') => axiosInstance.get(`/search?${query ? 'q=' + query + '&' : ''}page-size=8&api-key=test`)

// export const getArticles = ({ query = '', section, pageSize = 10 }) => {
//   const options = {
//     section: `section=${section}`
//   }
//   return axiosInstance.get(`/search?${query ? 'q=' + query + '&' : ''}section=${section}&page-size=${pageSize}&api-key=test`)
// }

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