const { Clientes } = require("../models/Clientes.js");

module.exports = {
    async listar(req, res) {
        return await Clientes.findAll({
            include: 'clienteEndereco'
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
    },

    async excluir(id) {
        if (!await Clientes.findByPk(id)) {
            return `Cliente com o id ${id} não encontrada!`
        }
        await Clientes.destroy({
            where: {
                id_cliente : id
            }
        })
        return `Cliente com o id ${id} excluída com sucesso!`
    },

    
    async buscarCliente(id) {
        if (!await Clientes.findByPk(id)) {
            return `Cliente com o id ${id} não encontrada!`
        }
        return await Clientes.findOne({
            include: 'clienteEndereco',
            where: {
                id_cliente : id
            }
        });
    }
}