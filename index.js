const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('ola')
})

app.use(express.json())

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})


//(async () => {
  //  const database = require('./db');
   // const produto = require('./produto');
   // await database.sync();

    //const novoProduto = await produto.create({
      //  nome: 'Teclado USB',
       // preco: 30,
       // descricao: 'Teclado bacana'
       //
    //})
    //console.log(novoProduto)

    //const produtos = await produto.findAll();
    //console.log(produtos)

    //const buscarProduto = await produto.findByPk(1);
    //console.log(buscarProduto);

    //await buscarProduto.destroy();

    //buscarProduto.descricao = 'fiz uma alteração';
    //await buscarProduto.save();


//})();