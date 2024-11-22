const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ropaSchema = new Schema({
    prenda: {
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
    color: String
});

const Ropa = mongoose.model('Ropa', ropaSchema);
module.exports = Ropa;