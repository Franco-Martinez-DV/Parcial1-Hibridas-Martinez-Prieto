const express = require('express');
const router = express.Router();
/* ------------------------- Importo el Controlador ------------------------- */
const { addAlbum, getAlbums, getAlbumById, deleteAlbumById, updateAlbumById } = require('../controllers/albumController');

router.get('/', getAlbums);
router.post('/', addAlbum);
router.get('/:id', getAlbumById);
router.delete('/:id', deleteAlbumById);
router.put('/:id', updateAlbumById);

module.exports = router;