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

    async atualizar(req, res) {
        try{
            const id_cliente = req.params.id
            const {nome, cpf, contato, email, assinante} = req.body
            let clientes = await Clientes.findOne({ where: { id_cliente }})

            if(!clientes) {
                res.status(404).json({ message: "Nenhum usuario encontrado"})
                return
            }
            clientes = await Clientes.update({nome, cpf, contato, email, assinante}, { where: { Id_cliente : id_cliente }})
            res.status(200).json({ clientes })
        }catch (error){
            console.log(error);
            res.status(500).json({error})
        }
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