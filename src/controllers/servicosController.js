const servicosService = require('../services/servicosService.js')

module.exports = {
    async listarServicos(req, res) {
        res.json(
            await servicosService.listar()
        )
    },

    async cadastrarServico(req, res) {
        res.json(
            await servicosService.salvar(req, res)
        )
    },

    async excluirServico(req, res) {
        res.json(
            await servicosService.excluir(req.params.id)
        )
    },

    async buscarServico(req, res) {
        res.json(
            await servicosService.buscarServico(req.params.id)
        )
    }
}