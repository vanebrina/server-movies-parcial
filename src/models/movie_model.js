const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    releaseDate: { type: Date, require: true },
    genre: { type: [String], require: true },
    director: { type: String, require: true },
    cast: { type: [String], require: true },
    duration: { type: Number, require: true },
    rating: { type: String, require: true},
    language: { type: [String], require: true },
    poster: { type: [String], require: true },
    trailer: { type: String, require: true },
    productionCompany: { type: [String], require: true },
    country : { type: [String], require: true },
});

module.exports = mongoose.model("Movie", movieSchema)