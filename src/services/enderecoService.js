const {Endereco} = require("../models/endereco.js")

module.exports = {
    async listar(req, res) {
        return await Endereco.findAll();
    },

    async salvar(req, res) {
        return await Endereco.create(req.body);
    }
}