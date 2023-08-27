const ProdutoService = require('../services/ProdutoService')

module.exports = {
    async listarTodosProdutos(req, res) {
        res.json(
            await ProdutoService.listar()
        )
    },

    async salvarProduto(req, res) {
        res.json(
            await ProdutoService.salvar(req, res)
        )
    },

    async excluirProduto(req, res) {
        res.json(
            await ProdutoService.excluir(req.params.id)
        )
    }
}