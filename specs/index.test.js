const app = require('./../index')
const server = app.listen()
const request = require('supertest').agent(server)

afterEach(() => {
  server.close()
})

test('home route', async () => {
  expect((await request.get('/')).text).toEqual('Olar')
})