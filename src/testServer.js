import 'whatwg-fetch'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get('*', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({
      response: {
        results: [
          {
            id: '1',
            sectionId: 'culture',
            webTitle: 'test-1',
            fields: {
              thumbnail: 'test-thumbnail',
              trailText: 'test'
            }
          },
          {
            id: '2',
            sectionId: 'sport',
            webTitle: 'test-2',
            fields: {
              thumbnail: 'test-thumbnail',
              trailText: 'test'
            }
          }
        ]
      }
    }))
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

export { server, rest }