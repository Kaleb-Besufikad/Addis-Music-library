import Song from '../mongodb/models/song.js';
import mongoose from "mongoose";

export const createSong = async (req, res) => {
    try {
    const {title, artist, album, genre, duration} = req.body;

    const songExists = await Song.findOne({title})
    if (songExists) return res.status(200).json(songExists);

    const newSong = await Song.create({title, artist, album, genre, duration})
    res.status(200).json(newSong);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};
export const updateSong = async (req, res) => {
    try {
        const {id } = req.params;
        const {title, artist, album, genre, duration} = req.body;

        const updatedSong = await Song.findByIdAndUpdate(
            {_id:id},
            {title, artist, album, genre, duration}
        );

        res.status(200).json(updatedSong);
    } catch (e) {
        res.status(500).json({message:e});
    }
};
export const deleteSong = async (req, res) => {
    try {
        const {id} = req.params;

        await Song.findByIdAndDelete(id);
        res.status(200).json({message: 'SongCard deleted successfully'});
    } catch (e) {
        res.status(500).json({message:e});
    }
};

export const getAllSongs = async (req, res) => {
    const query = {};


    try {
        const count = await Song.countDocuments({query});
        const songs = await Song
            .find(query)
        res.status(200).json(songs);
    } catch (e) {
        res.status(500).json({message:e.message})
    }
};


export const generateStatistics = async (req, res) => {
    try {
        const totalSongs = await Song.countDocuments();
        const totalArtists = await Song.distinct('artist');
        const totalAlbums = await Song.distinct('album');
        const totalGenres = await Song.distinct('genre');

        const songsPerGenre = await Song.aggregate([
            { $unwind: "$genre" },
            {
                $group: {
                    _id: "$genre",
                    count: { $sum: 1}
                }
            }
        ]);

        const songsPerArtist = await Song.aggregate([
            {
                $group: {
                    _id: "$artist",
                    songsCount: { $sum: 1 },
                    albumsCount: { $addToSet: "$album" }
                }
            },
            {
                $project: {
                    _id: 1,
                    songsCount: 1,
                    albumsCount: { $size: "$albumsCount" }
                }
            }
        ]);

        const songsPerAlbum = await Song.aggregate([
            {
                $group: {
                    _id: "$album",
                    count: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json({
            totalSongs,
            totalArtists,
            totalAlbums,
            totalGenres,
            songsPerGenre,
            songsPerArtist,
            songsPerAlbum
        });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};
