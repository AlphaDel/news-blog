import * as utils from './index'

describe('utils', () => {
  describe('transformFilter', () => {
    test('should return transforms object of camel case to string kebab case', () => {
      expect(utils.transformFilter({
        orderBy: 'newest',
        pageSize: 10,
      })).toEqual('&order-by=newest&page-size=10')
    })
    test('should return empty string when argument is empty object', () => {
      expect(utils.transformFilter({})).toEqual('')
    })
  })
})