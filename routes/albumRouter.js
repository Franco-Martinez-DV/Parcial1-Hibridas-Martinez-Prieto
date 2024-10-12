const express = require('express');
const router = express.Router();
/* ------------------------- Importo el Controlador ------------------------- */
const { addAlbum, getAlbums, getAlbumById, getAlbumByGenre, deleteAlbumById, updateAlbumById } = require('../controllers/albumController');

router.get('/', getAlbums);
router.get('/:id', getAlbumById);
router.get('/genre/:genre', getAlbumByGenre);

router.post('/', addAlbum);
router.put('/:id', updateAlbumById);
router.delete('/:id', deleteAlbumById);

module.exports = router;