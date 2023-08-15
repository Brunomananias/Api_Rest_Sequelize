const ProdutoService = require('../services/ProdutoService')

module.exports = {
    async listarTodosProdutos(req, res) {
        res.json(
            await ProdutoService.listar()
        )
    }
}