const express = require('express')
const bodyParser = require('body-parser')
const smartphone = require('./src/routes/smartphones.route')

// inicializar app express
const app = express()
app.use('/smartphones', smartphone)

let porto = 8000
app.listen(porto, () => {
    console.log('Servidor em execução no porto' + porto);
})