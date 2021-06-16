const express = require('express');

const app = express();
//Setando que o motor de HTML será a EJS
app.set('view engine', 'ejs');
//Setando para aceitar a pasta dos conteudos estaticos.
app.use(express.static('public'));

app.get("/",(req, res)=>{
    res.render('index');
});

app.get("/perguntar",(req, res)=>{
    res.render('perguntar');
});
app.listen(8080,()=>{
    console.log('App rodando!');
});
