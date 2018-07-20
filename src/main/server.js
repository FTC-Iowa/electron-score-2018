import express from 'express'

export default function createServer (app) {
  const server = express()
  server.get('/you_there', (req, res) => {
    res.send(app.respondToClient(req))
  })
  server.listen(9999, () => console.log('example app listening on port 9999'))
}
