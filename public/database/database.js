const Sequelize = require('sequelize');

const connection = new Sequelize("guiapergunta", "cirinarosa", "12345678", {
    host: "127.0.0.1",
    dialect: "mysql"
}); 

module.exports = connection;

