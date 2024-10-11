const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const albumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    released_by: {
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    },
    release_date: Date,
    genre: [String],
    cover_art: String,
    tracklist: Array,
    is_explicit: Boolean,
    label: [String],
    sells: Number,
    awards: [String]
});

const Album = mongoose.model('Album', albumSchema);
module.exports = Album;