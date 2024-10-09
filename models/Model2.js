const mongoose = require('mongoose'); //Asi lo tiene el profe pero da una rayita

const Schema = mongoose.Schema;

const model2Schema = new Schema({
    // description: String,
    // created: {
    //     type: Date,
    //     default: Date.now
    // },
    // completed: {
    //     type: Boolean,
    //     default: false
    // },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // }
});
//Lo comentado arriba es un ejemplo de un esquema y los datos que necesita para realizarlo
//En model2Name va que queremos hacer, ejemplo, un modelo de autos, con su nombre, marca, motor
//En model2Schema va el nombre del esquema  que queremos hacer, siguiendo con el auto, seria carSchema
//Otro ejemplo puede ser awards y awardsSchema
const model2Name = mongoose.model('modelName', model2Schema);
module.exports = model2Name;