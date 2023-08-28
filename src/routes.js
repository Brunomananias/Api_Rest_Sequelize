const express = require('express')
const routes = express.Router()
const ProdutoController = require('./controllers/ProdutoController')
const ClientesController = require('./controllers/ClientesController')

routes.get('/produtos', ProdutoController.listarTodosProdutos)
routes.post('/produtos', ProdutoController.salvarProduto)
routes.delete('/Produtos/:id', ProdutoController.excluirProduto)

routes.get('/Clientes', ClientesController.listarClientes)
routes.post('/Clientes', ClientesController.cadastrarCliente)
routes.delete('/Clientes/:id', ClientesController.excluirCliente)


module.exports = routes