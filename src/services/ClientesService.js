const {Clientes} = require("../models/Clientes.js")

module.exports = {
    async listar(req, res) {
        return await Clientes.findAll();
    },

    async salvar(req, res) {
        return await Clientes.create(req.body);
    }
}