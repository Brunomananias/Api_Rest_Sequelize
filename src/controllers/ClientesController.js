const ClientesService = require('../services/ClientesService.js')

module.exports = {
    async listarClientes(req, res) {
        res.json(
            await ClientesService.listar()
        )
    },

    async cadastrarCliente(req, res) {
        res.json(
            await ClientesService.salvar(req, res)
        )
    },

    async atualizarCliente(req, res) {
        res.json(
            await ClientesService.atualizar(req, res, req.params.id)
        )
    },

    async excluirCliente(req, res) {
        res.json(
            await ClientesService.excluir(req.params.id)
        )
    },

    async buscarCliente(req, res) {
        res.json(
            await ClientesService.buscarCliente(req.params.id)
        )
    }
}