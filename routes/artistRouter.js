const express = require('express');
const router = express.Router();
const { addArtist, getArtists, getArtistById, getArtistsByName, getArtistsByGenre, getArtistsByCountry, deleteArtistById, updateArtistById } = require('../controllers/artistController');

router.get('/', getArtists);
router.get('/:id', getArtistById);
router.get('/name/:name', getArtistsByName);
router.get('/genre/:genre', getArtistsByGenre);
router.get('/country/:country', getArtistsByCountry);

router.post('/', addArtist);
router.put('/:id', updateArtistById);
router.delete('/:id', deleteArtistById);

module.exports = router;