const { Produtos } = require('../models/produto.js');

module.exports = {
    async listar(req, res){
        return await Produtos.findAll();
}
}