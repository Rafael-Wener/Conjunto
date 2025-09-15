const express = require('express')
const app = express();
const bodyParser = require ('body-parser')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))


//Vai abrir um ejs = html
//Colocar exatamente o que está no app.get no URL chrome para abrir
// lembrar de ativar o Auto Save

app.get("/rafael",(req,res) => {
    nome = "rafael"
    console.log(nome)
    res.render("rafael",{nome})
})


app.get("/joao",(req,res) => {
    nome = "joao"
    console.log(nome)
    res.render("joao",{nome})
})


//Rotas aqui

app.listen(3000,() => {
    console.log("Servidor rodando em hhtp://localhost:3000")
})