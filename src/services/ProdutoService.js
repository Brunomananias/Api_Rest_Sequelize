const { Produtos } = require("../models/Produtos");

module.exports = {
    async listar(req, res) {
        return await Produtos.findAll();
    }
}