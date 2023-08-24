require('dotenv').config()
const express = require('express')
const routes = require('./src/routes')
const cors = require('cors')

const server = express()
server.use(cors())

server.listen(process.env.API_PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${process.env.API_PORT}`)
})

server.use(express.json())
server.use(routes)


