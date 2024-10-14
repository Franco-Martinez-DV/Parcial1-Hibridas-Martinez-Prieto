const Album = require('../models/albumModel');

const addAlbum = async (req, res) => {
    const { title, released_by, release_date, genre, cover_art, tracklist, is_explicit, label, sells, awards } = req.body;

    if (!title) {
        res.status(400).json({ msg: "El nombre del álbum es obligatorio.", data: {title} });
    }

    try {
        const newAlbum = new Album({ title, released_by, release_date, genre, cover_art, tracklist, is_explicit, label, sells, awards });
        await newAlbum.save();
        res.status(200).json({ msg: "Se guardó el álbum " + `'${title}'` + " correctamente.", data: {newAlbum} });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "No se pudo guardar el álbum.", data: {} });
    }
};

const getAlbums = async (req, res) => {
    const album = await Album.find();
    res.status(500).json({ msg: "Estos son los álbumes disponibles en nuestra base de datos:", data: album });
};

const getAlbumById = async (req, res) => {
    const { id } = req.params;

    try {
        const album = await Album.findById(id);

        if (album) {
            res.status(200).json({ msg: "Se encontró el álbum por ID: " + `'${album.title}'`, data: album });
        } else {
            res.status(404).json({ msg: "No se encontró el álbum por ID.", data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al buscar el álbum por ID.", data: {} });
    }
};

const getAlbumByGenre = async (req, res) => {
    const { genre } = req.params;

    try {
        const album = await Album.find({ genre });

        if (album.length > 0) {
            res.status(200).json({ msg: `Estos son los álbumes pertenecientes al género ${genre}.`, data: album });
        } else {
            res.status(404).json({ msg: `No se encontraron álbumes pertenecientes al género ${genre}.`, data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al filtrar álbumes por género.", data: {} });
    }
};

const getExplicitsAlbums = async (req, res) => {
    try {
        const album = await Album.find({ is_explicit : true });

        if (album) {
            res.status(200).json({ msg: `Estos son los álbumes explicitos.`, data: album });
        } else {
            res.status(404).json({ msg: `No se encontraron álbumes explicitos.`, data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al filtrar por álbumes explicitos.", data: {} });
    }
};

const deleteAlbumById = async (req, res) => {
    const { id } = req.params;

    try {
        const album = await Album.findByIdAndDelete(id);

        if (album) {
            res.status(200).json({ msg: "Álbum borrado.", data: album });
        } else {
            res.status(404).json({ msg: "No se pudo borrar el álbum por ID.", data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al querer borrar el álbum por ID.", data: {} });
    }
};

const updateAlbumById = async (req, res) => {
    const { id } = req.params;
    const { title, released_by, release_date, genre, cover_art, tracklist, is_explicit, label, sells, awards } = req.body;

    try {
        const album = await Album.findByIdAndUpdate(id, { title, released_by, release_date, genre, cover_art, tracklist, is_explicit, label, sells, awards }, {new: true});

        if (album) {
            res.status(200).json({ msg: "Se actualizó el álbum " + `'${album.title}'.`, data: album });
        } else {
            res.status(404).json({ msg: "No se pudo actualizar el album " + `'${album.title}'.`, data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al querer actualizar el álbum.", data: {} });
    }
};

module.exports = { addAlbum, getAlbums, getAlbumById, getAlbumByGenre, getExplicitsAlbums, deleteAlbumById, updateAlbumById };