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

    async excluirCliente(req, res) {
        res.json(
            await ClientesService.excluir(req.params.id)
        )
    }
}