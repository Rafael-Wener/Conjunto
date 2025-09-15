const express = require('express')
const app = express();
const bodyParser = require ('body-parser')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))


//Vai abrir um ejs = html
//Colocar exatamente o que está no app.get no URL chrome para abrir
// lembrar de ativar o Auto Save

app.get("/josias",(req,res) => {
    nome = "josias"
    console.log(nome)
    res.render("josias",{nome})
})


//Rotas aqui

app.listen(3000,() => {
    console.log("Servidor rodando em hhtp://localhost:3000")
})