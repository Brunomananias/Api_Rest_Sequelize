const Sequelize = require('sequelize');
const sequelize = new Sequelize('BarbeariaTz', 'root', '123456789', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

module.exports = sequelize