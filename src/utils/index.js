export const getFilterFormatted = () => {
  let filter = ''
  Object.entries(filters).forEach((entry) => {
    const key = entry[0].replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
    filter = `${filter}&${key}=${entry[1]}`
  })

  return filter
}