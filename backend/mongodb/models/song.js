import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
    title: {type: String, required: true},
    artist: {type: String, required: true},
    album: {type: String, required: true},
    genre: {type: [String], required: true},
    duration: {type: Number, required: false}
})

const songModel = mongoose.model('Song', SongSchema);

export default songModel;