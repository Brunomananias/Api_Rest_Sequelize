require('dotenv').config()
const express = require('express')
const routes = require('./src/routes')

const server = express()

server.listen(process.env.API_PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${process.env.API_PORT}`)
})

server.use(express.json())
server.use(routes)


