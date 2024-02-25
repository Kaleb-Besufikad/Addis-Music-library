import Song from '../mongodb/models/song.js';

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
        const {id} = req.params;
        const {title, artist, album, genre, duration} = req.body;

        const updatedSong = await Song.findByIdAndUpdate(
            {_id: id},
            {title, artist, album, genre, duration}
        );

        res.status(200).json(updatedSong);
    } catch (e) {
        res.status(500).json({message: e});
    }
};
export const deleteSong = async (req, res) => {
    try {
        const {id} = req.params;

        await Song.findByIdAndDelete(id);
        res.status(200).json({message: 'SongCard deleted successfully'});
    } catch (e) {
        res.status(500).json({message: e});
    }
};

export const getAllSongs = async (req, res) => {
    const { artist, album, genre} = req.query;

    const query = {};

    if (artist) {
        query.artist = artist;
    }
    if (album) {
        query.album = album;
    }
    if (genre) {
        query.genre = genre;
    }

    try {
        const songs = await Song.find(query);
        res.status(200).json(songs);
    } catch (e) {
        res.status(500).json({message: e.message});
    }

};


