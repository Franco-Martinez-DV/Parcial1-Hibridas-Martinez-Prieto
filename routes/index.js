/* ---------------------------- Importa las rutas --------------------------- */
const userRouter = require('./userRouter');
const artistRouter = require('./artistRouter');
const albumRouter = require('./albumRouter');

function routerAPI(app){
    app.use('/api/users', userRouter);
    app.use('/api/artists', artistRouter);
    app.use('/api/albums', albumRouter);
}

module.exports = routerAPI;