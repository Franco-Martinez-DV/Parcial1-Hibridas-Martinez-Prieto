const express = require('express');
const router = express.Router();
/* ------------------------- Importo el Controlador ------------------------- */
const { addArtist, getArtists, getArtistById, deleteArtistById, updateArtistById } = require('../controllers/artistController');

router.get('/', getArtists);
router.post('/', addArtist);
router.get('/:id', getArtistById);
router.delete('/:id', deleteArtistById);
router.put('/:id', updateArtistById);

module.exports = router;