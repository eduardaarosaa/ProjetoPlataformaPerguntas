const express = require('express');

const app = express();

//Chamando o bodyParser
const bodyParser = require("body-parser");

const connection = require ('./public/database/database');

//database

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com banco de dados");
    })
    .catch((msgErro)=> {
        console.log(msgErro , 'maracuja');
    })

//Setando que o motor de HTML ser� a EJS
app.set('view engine', 'ejs');
//Setando para aceitar a pasta dos conteudos estaticos.
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",(req, res)=>{
    res.render('index');
});

app.get("/perguntar",(req, res)=>{
    res.render('perguntar');
});

app.post("/salvarPergunta", (req, res) =>{

    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    res.send("Formulário Recebido! titulo"+ titulo + " " + " descricao" + descricao);

});


app.listen(5000,()=>{
    console.log('App rodando!');
});
