const express = require('express');
const router = express.Router();
const { addAlbum, getAlbums, getAlbumById, getAlbumByGenre, getExplicitsAlbums, deleteAlbumById, updateAlbumById } = require('../controllers/albumController');

router.get('/', getAlbums);
router.get('/:id', getAlbumById);
router.get('/genre/:genre', getAlbumByGenre);
router.get('/explicits/true', getExplicitsAlbums);

router.post('/', addAlbum);
router.put('/:id', updateAlbumById);
router.delete('/:id', deleteAlbumById);

module.exports = router;