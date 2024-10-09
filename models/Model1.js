const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const model1Schema = new Schema({
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
//En modelName va que queremos hacer, ejemplo, un modelo de autos, con su nombre, marca, motor
//En model1Schema va el nombre del esquema  que queremos hacer, siguiendo con el auto, seria carSchema
//Entonces seria motor y motorSchema
const modelName = mongoose.model('modelName', model1Schema);
module.exports = modelName;