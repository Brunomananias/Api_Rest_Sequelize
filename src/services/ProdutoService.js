const { Produtos } = require("../models/Produtos");

module.exports = {
    async listar(req, res) {
        return await Produtos.findAll();
    },

    async salvar(req, res) {
    return await Produtos.create(req.body);
    },

    async excluir(id) {
        if (!await Produtos.findByPk(id)) {
            return `Produto com o id ${id} não encontrada!`
        }
        await Produtos.destroy({
            where: {
                id : id
            }
        })

        return `Produto com o id ${id} excluída com sucesso!`
    }
}