import Category from '../components/Category'

const ArticleCategory = ({ articlesByCategory = [] }) => {
  const categories = articlesByCategory.reduce((r, a) => {
    r[a.sectionId] = r[a.sectionId] || []
    r[a.sectionId].push(a)
    return r
  }, [])

  return (
    <Category categories={categories} />
  )
}

export default ArticleCategory

