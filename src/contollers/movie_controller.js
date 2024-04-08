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


const listMovie = async(req, res) => {
    try {
        const movies = await movieModel.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

const getMovie = async(req, res) => {
    try {
        const {id} = request.params;
        console.log(id);
        const movie = await movieModel.findById(id);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

const editMovie = async(req, res) => {
    try {
        const {id} = req.params;
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
        //console.log(id);
        //console.log(req.body);

        const movieEdit = {};

        const poster = []
        req.files.forEach(file => {
            poster.push(file.originalname);
        });
        console.log(poster);

        movieEdit.title = title;
        movieEdit.description = description;
        movieEdit.releaseDate = releaseDate;
        movieEdit.genre = genre;
        movieEdit.director = director;
        movieEdit.cast = cast;
        movieEdit.duration = duration;
        movieEdit.rating = rating;
        movieEdit.language = language;
        movieEdit.trailer = trailer;
        movieEdit.productionCompany = productionCompany;
        movieEdit.country = country;
        movieEdit.poster = poster;

        const movie = await movieModel.findByIdAndUpdate(id, movieEdit);
        console.log(movie);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

const deleteMovie = async(req, res) => {
    try{
        const {id} = req.params;
        await movieModel.findByIdAndDelete(id);
        res.status(200).json('movie deleted successfully');
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

module.exports = {
    createMovie,
    listMovie,
    getMovie,
    editMovie,
    deleteMovie
} 
