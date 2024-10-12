const Artist = require('../models/artistModel');

const addArtist = async (req, res) => {
    const { name, biography, birthdate, genre, discography, country, awards, socialMedia } = req.body;

    if (!name) {
        res.status(400).json({ msg: "El nombre del artista es obligaotrio.", data: {name} });
    }

    try {
        const newArtist = new Artist({ name, biography, birthdate, genre, discography, country, awards, socialMedia });
        await newArtist.save();
        res.status(200).json({ msg: "Se guardó el artista correctamente.", data: {newArtist} });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al guardar el artista.", data: {} });
    }
};

const getArtists = async (req, res) => {
    const artist = await Artist.find();
    res.status(500).json({ msg: "Estos son los artistas.", data: artist });
};

const getArtistById = async (req, res) => {
    const { id } = req.params;

    try {
        const artist = await Artist.findById(id);

        if (artist) {
            res.status(200).json({ msg: "Se encontró al artista.", data: artist });
        } else {
            res.status(404).json({ msg: "No se encontró al artista.", data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al buscar el artista.", data: {} });
    }
};

const getArtistsByGenre = async (req, res) => {
    const { genre } = req.params;

    try {
        const artists = await Artist.find({ genre });

        if (artists.length > 0) {
            res.status(200).json({ msg: `Estos son los artistas pertenecientes al género ${genre}`, data: artists });
        } else {
            res.status(404).json({ msg: `No se han encontrado artistas pertenecientes al género ${genre}`, data:{} });
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al filtrar por género.", data: {} });
    }
};

const deleteArtistById = async (req, res) => {
    const { id } = req.params;

    try {
        const artist = await Artist.findByIdAndDelete(id);

        if (artist) {
            res.status(200).json({ msg: "Artista borrado.", data: artist });
        } else {
            res.status(404).json({ msg: "No se pudo borrar al artista.", data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al querer borrar el artista.", data: {} });
    }
};

const updateArtistById = async (req, res) => {
    const { id } = req.params;
    const { name, biography, birthdate, genre, discography, country, awards, socialMedia } = req.body;

    try {
        const artist = await Artist.findByIdAndUpdate(id, { name, biography, birthdate, genre, discography, country, awards, socialMedia }, {new: true});

        if (artist) {
            res.status(200).json({ msg: "Artista actualizado.", data: artist });
        } else {
            res.status(404).json({ msg: "No se pudo actualizar al artista.", data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al querer actualizar el artista.", data: {} });
    }
};

module.exports = { addArtist, getArtists, getArtistById, getArtistsByGenre, deleteArtistById, updateArtistById };