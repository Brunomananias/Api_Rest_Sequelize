const {Clientes} = require("../models/Clientes.js");
const { Endereco } = require("../models/endereco.js");

module.exports = {
    async listar(req, res) {
        return await Clientes.findAll({
            include: [{
                attributes: ['rua', 'numero', 'complemento', 'bairro', 'estado', 'cep', 'cidade'],
                model: Endereco
            }]
        });
    },

    async salvar(req, res) {
        return await Clientes.create(req.body);
    }
}