const { Clientes } = require("../models/Clientes.js");
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
        console.log(req.body)
        return await Clientes.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            contato: req.body.contato,
            email: req.body.email,
            assinante: req.body.assinante,
            clienteEndereco: req.body.endereco
        }, {
            include: [{
                association: 'clienteEndereco'
            }]
        }
        );
    }
}