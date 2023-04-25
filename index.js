const json = require('json-server')
const cors = require('cors')
const path = require('path')

const server = json.create()
const router = json.router(path.join(__dirname, 'db.json'))
const middlewares = json.defaults()

server.use(cors())
server.use(json.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = 8000

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})

