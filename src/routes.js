const express = require('express')
const routes = express.Router()
const ProdutoController = require('./controllers/ProdutoController')

routes.get('/produtos', ProdutoController.listarTodosProdutos)
routes.post('/produtos', ProdutoController.salvarProduto)

module.exports = routes