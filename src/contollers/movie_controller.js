const { request } = require('express');
const movieModel = require('../models/movie_model');

const createMovie = async (req, res) => {
    try {
        const {
            title,
            description,
            releaseDate,
            genre,
            director,
            cast,
            duration,
            rating,
            language,
            trailer,
            productionCompany,
            country
        } = req.body;

        const poster = []
        req.files.forEach(file => {
            poster.push(file.originalname);
        });
        console.log(poster);

        const newMovie = await movieModel.create({
            title,
            description,
            releaseDate,
            genre,
            director,
            cast,
            duration,
            rating,
            language,
            poster,
            trailer,
            productionCompany,
            country
        });

        console.log("new movie" + newMovie);
        res.status(201).json(newMovie);

    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

module.exports = {
    createMovie
};