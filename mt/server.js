const express = require('express')

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()
app.get('/*', (req, res) => {
  res.send(`${req.url}\n`)
})

const server = app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)

process.on('SIGTERM', shutDown)
process.on('SIGINT', shutDown)

function shutDown() {
  server.close(() => {
    console.log('server closed')
    process.exit(0)
  })
}