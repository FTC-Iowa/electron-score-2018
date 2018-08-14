import express from 'express'

export default function createServer (app) {
  const server = express()
  // server.get('/', (req, res) => {
  //   res.send(app.respondToClient(req))
  // })
  server.use(express.static(`${__dirname}/`))
  server.listen(9999, () => console.log('example app listening on port 9999'))
}
