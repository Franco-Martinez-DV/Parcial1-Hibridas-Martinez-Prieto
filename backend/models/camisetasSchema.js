const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const camisetasSchema = new Schema({
    camiseta: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    imagen_principal: {
        type: String,
        required: true
    },
    imagen_secundaria: String,
    imagen_terciaria: String,
    imagen_cuartenaria: String,
    temporada: {
        type: String,
        required: true
    }
});

const Camiseta = mongoose.model('Camisetas', camisetasSchema);
module.exports = Camiseta;