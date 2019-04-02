const mongoose = require('mongoose')
const Schema = mongoose.Schema

let SmartphoneSchema = new Schema({
    nome: {
        type: String, 
        required: true,
        max: 100
    },
    marca: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Smartphone', SmartphoneSchema)

// Mongoose é uma biblioteca do Nodejs que proporciona uma solução 
// baseada em esquemas para modelar os dados da sua aplicação. 
// Ele possui sistema de conversão de tipos, validação, criação 
// de consultas e hooks para lógica de negócios.