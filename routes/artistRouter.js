const express = require('express');
const router = express.Router();
/* ------------------------- Importo el Controlador ------------------------- */
const { addArtist, getArtists, getArtistById, getArtistsByGenre, getArtistsByCountry, deleteArtistById, updateArtistById } = require('../controllers/artistController');

router.get('/', getArtists);
router.get('/:id', getArtistById);
router.get('/genre/:genre', getArtistsByGenre);
router.get('/country/:country', getArtistsByCountry);

router.post('/', addArtist);
router.put('/:id', updateArtistById);
router.delete('/:id', deleteArtistById);

module.exports = router;