/* ---------------------------- Importa las rutas --------------------------- */
const model1 = require('./model1');
const model2 = require('./model2');

function routerAPI( app){
    // Definimos los endPoints
    app.use('/api/model1', model1);
    app.use('/api/model2', model2);
}

module.exports = routerAPI;