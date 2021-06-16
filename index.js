const express = require('express');

const app = express();
//Setando que o motor de HTML será a EJS
app.set('view engine', 'ejs');
//Setando para aceitar a pasta dos conteudos estaticos.
app.use(express.static('public'));

app.get("/:nome/:lang",(req, res)=>{
    var nome =  req.params.nome; 
    var lang = req.params.lang;
    var exibirMensagem = false;
    var produtos = [
        {nome: "Ferro Roche", preco: "17.99"},
        {nome: "Danone", preco:"5.00"},
        {nome: "Mussarela Real", preco:"39.99"}
    ];

    res.render('index', 
    {
     nome: nome ,
     lang: lang,
     profissao: 'Developer', 
     msg: exibirMensagem,
     produtos:produtos   
    });
});

app.listen(8080,()=>{
    console.log('App rodando!');
});
