const Squelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define("respostas", {
    corpo:{
        type:Squelize.TEXT,
        allowNull:false
    },
    perguntaId:{
        type:Squelize.INTEGER,
        allowNull:false        
    }
});

//Force false  - para não recriar a tabela caso ela já esteja criada.
Resposta.sync({force:false});

module.exports = Resposta;