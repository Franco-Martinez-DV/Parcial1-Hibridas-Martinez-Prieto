const Album = require('../models/albumModel');

const addAlbum = async (req, res) => {
    const { title, released_by, release_date, genre, cover_art, tracklist, is_explicit, label, sells, awards } = req.body;

    if (!title) {
        res.status(400).json({ msg: "El nombre del album es obligaotrio.", data: {title} });
    }

    try {
        const newAlbum = new Album({ title, released_by, release_date, genre, cover_art, tracklist, is_explicit, label, sells, awards });
        await newAlbum.save();
        res.status(200).json({ msg: "Se guardó el album correctamente.", data: {newAlbum} });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al guardar el album.", data: {} });
    }
};

const getAlbums = async (req, res) => {
    const album = await Album.find();
    res.status(500).json({ msg: "Estos son los albums disponibles:", data: album });
};

const getAlbumById = async (req, res) => {
    const { id } = req.params;

    try {
        const album = await Album.findById(id);

        if (album) {
            res.status(200).json({ msg: "Se encontró el album.", data: album });
        } else {
            res.status(404).json({ msg: "No se encontró el album.", data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al buscar el album por ID.", data: {} });
    }
};

const getAlbumByGenre = async (req, res) => {
    const { genre } = req.params;

    try {
        const album = await Album.find({ genre });

        if (album.length > 0) {
            res.status(200).json({ msg: `Estos son los albums de género ${genre}.`, data: album });
        } else {
            res.status(404).json({ msg: `No se encontraron albums del género ${genre}.`, data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al filtrar por género.", data: {} });
    }
};

const deleteAlbumById = async (req, res) => {
    const { id } = req.params;

    try {
        const album = await Album.findByIdAndDelete(id);

        if (album) {
            res.status(200).json({ msg: "Album borrado.", data: album });
        } else {
            res.status(404).json({ msg: "No se pudo borrar el album.", data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al querer borrar el album.", data: {} });
    }
};

const updateAlbumById = async (req, res) => {
    const { id } = req.params;
    const { title, released_by, release_date, genre, cover_art, tracklist, is_explicit, label, sells, awards } = req.body;

    try {
        const album = await Album.findByIdAndUpdate(id, { title, released_by, release_date, genre, cover_art, tracklist, is_explicit, label, sells, awards }, {new: true});

        if (album) {
            res.status(200).json({ msg: "Album actualizado.", data: album });
        } else {
            res.status(404).json({ msg: "No se pudo actualizar el album.", data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al querer actualizar el album.", data: {} });
    }
};

module.exports = { addAlbum, getAlbums, getAlbumById, getAlbumByGenre, deleteAlbumById, updateAlbumById };