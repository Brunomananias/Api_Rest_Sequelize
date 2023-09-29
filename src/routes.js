const express = require('express')
const routes = express.Router()
const ProdutoController = require('./controllers/ProdutoController')
const ClientesController = require('./controllers/ClientesController')
const servicosController = require('./controllers/servicosController')

routes.get('/produtos', ProdutoController.listarTodosProdutos)
routes.post('/produtos', ProdutoController.salvarProduto)
routes.delete('/Produtos/:id', ProdutoController.excluirProduto)

routes.get('/Clientes/:id', ClientesController.buscarCliente)
routes.get('/Clientes', ClientesController.listarClientes)
routes.post('/Clientes', ClientesController.cadastrarCliente)
routes.put('/Clientes/:id', ClientesController.atualizarCliente)
routes.delete('/Clientes/:id', ClientesController.excluirCliente)

routes.get('/servicos', servicosController.listarServicos)
routes.get('/servicos/:id', servicosController.buscarServico)
routes.post('/servicos', servicosController.cadastrarServico)
routes.delete('/servicos/:id', servicosController.excluirServico)



module.exports = routes