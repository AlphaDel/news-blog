import { useCallback, useEffect, useState } from 'react'
import { getArticles as requestGetArticles } from '../services'
import useDebounce from '../hooks/use-debounce'

const useFetch = ({ query, page, orderBy }) => {
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [tempQuery, _setTempQuery] = useState(query)
  const [tempOrderBy, setTempOrderBy] = useState(orderBy)

  const [list, setList] = useState([])
  const debouncedSearch = useDebounce(query, 500)
  const sendQuery = useCallback(async () => {
    try {
      if (tempQuery !== debouncedSearch || tempOrderBy !== orderBy) setList([])

      setLoading(true)
      const { data } = await requestGetArticles(debouncedSearch, {
        orderBy,
        page,
        section: 'news',
        pageSize: 15,
        showFields: 'thumbnail',
      })
      setList((prev) => [...new Set([...prev,  ...data.response.results])])
      setLoading(false)
      setHasError(false)
      setTempOrderBy(orderBy)
    } catch (error) {
      console.error(error)
      setHasError(true)
    }
  }, [debouncedSearch, page, orderBy])

  useEffect(() => {
    sendQuery()
  }, [debouncedSearch, sendQuery, page])

  return { loading, list, hasError }
}

export default useFetch
