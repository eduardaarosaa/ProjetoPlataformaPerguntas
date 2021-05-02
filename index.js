const express = require('express');

const app = express();
//Setando que o motor de HTML será a EJS
app.set('view engine', 'ejs');

app.get("/:nome/:lang",(req, res)=>{
    var nome =  req.params.nome; 
    var lang = req.params.lang;
    var exibirMensagem = true;
    res.render('index', 
    {
     nome: nome ,
     lang: lang,
     profissao: 'Developer', 
     msg: exibirMensagem
    });
});

app.listen(8080,()=>{
    console.log('App rodando!');
});
