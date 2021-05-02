const express = require('express');

const app = express();
//Setando que o motor de HTML será a EJS
app.set('view engine', 'ejs');

app.get("/",(req, res)=>{
    var nome = 'Duda'; 
    var lang = 'PHP';
    res.render('index', 
    {
     nome: nome ,
     lang: lang,
     profissao: 'Developer'
    });
});

app.listen(8080,()=>{
    console.log('App rodando!');
});
