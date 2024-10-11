const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    biography: String,
    birthdate: Date,
    genre: [String],
    discography: Array,
    country: String,
    awards: [String],
    socialMedia: {
        twitter: String,
        instagram: String,
        facebook: String
    }
});

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;