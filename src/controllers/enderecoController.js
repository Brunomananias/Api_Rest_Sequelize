const enderecoService = require('../services/enderecoService.js')

module.exports = {
    async listarEndereco(req, res) {
        res.json(
            await enderecoService.listar()
        )
    },

    async cadastrarEndereco(req, res) {
        res.json(
            await enderecoService.salvar(req, res)
        )
    },
}