const express = require('express');

const app = express();
//Setando que o motor de HTML será a EJS
app.set('view engine', 'ejs');

app.get("/",(req, res)=>{
    res.send("Bem vindo!");
});

app.listen(8080,()=>{
    console.log('App rodando!');
});
