const express = require('express');

const app = express();

//Chamando o bodyParser
const bodyParser = require("body-parser");

const connection = require ('./public/database/database');

const perguntaModel = require('./public/database/Pergunta');
const Pergunta = require('./public/database/Pergunta');
const Resposta = require('./public/database/Resposta');

//database

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com banco de dados");
    })
    .catch((msgErro)=> {
        console.log(msgErro);
    })

//Setando que o motor de HTML será EJS
app.set('view engine', 'ejs');
//Setando para aceitar a pasta dos conteudos estaticos.
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//ROTAS
app.get("/",(req, res)=>{
    Pergunta.findAll({
        raw:true, //setar o retorno apenas das linhas ta tabela
        order:[
            ["id", "DESC"]
        ]
    }).then(
        perguntas => {
            res.render('index', {
                //nome da tabela, que recebe a varaivel perguntas com as row
                perguntas:perguntas
              });
        }
    ); //Equivalente ao SELECT * FROM perguntas;
   
});

app.get("/perguntar",(req, res)=>{
    res.render('perguntar');
});

app.post("/salvarPergunta", (req, res) =>{

    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    //Equivalente ao INSERT INTO 
    Pergunta.create({
        titulo: titulo, 
        descricao: descricao
    }).then(() => {
        /**
         * usando o proprio express com o res, para redirecionar caso com sucesso
         *  para a página principal **/

        res.redirect("/");
    })
});

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;
    //Busca no banco de dados pelo ID
    Pergunta.findOne({
        where: {
            id:id //buscar pelo id igual ao id   - Condição
        }
    }).then(pergunta => {
        if(pergunta != undefined){
            Resposta.findAll({
            where:{perguntaId:pergunta.id},
            order:[
                    ['id', 'DESC']
                ]
        }).then(respostas => {
            res.render('pergunta', {
                pergunta: pergunta,
                respostas:respostas
        });
     });       
        }else{
            res.redirect('/');
        }
    });
})

app.post("/responder", (req, res) => {
    var corpo = req.body.corpo; 
    var perguntaId = req.body.perguntaId;
    
    Resposta.create(
        {
            corpo:corpo,
            perguntaId:perguntaId
        }
        
    ).then(() => {
        res.redirect("/pergunta/"+perguntaId)
    });
});
app.listen(5000,()=>{
    console.log('App rodando!');
});
