const { Produtos } = require("../models/Produtos");

module.exports = {
    async listar(req, res) {
        return await Produtos.findAll();
    },

    async salvar(req, res) {
        return await Produtos.create(req.body);
    }
}