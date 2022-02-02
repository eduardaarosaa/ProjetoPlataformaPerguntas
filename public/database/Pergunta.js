/** Model - Geralmente declara-se com letra Maiuscula o nome do arquivo 
 * com isso percebe-se que é uma Model.
 **/

const  Sequelize = require("sequelize");

const connection = require("./database");

//Definir o model 

const Pergunta = connection.define('perguntas', {
    titulo:{
        type:Sequelize.STRING,
        allowNull: false //Impede que esse campo recebe null
    },
    descricao:{
        type:Sequelize.TEXT,
        allowNull: false 
    }
});

Pergunta.sync({force:false}).then(()=>{});


module.exports = Pergunta;