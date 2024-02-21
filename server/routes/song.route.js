import express from "express";

import {
    createSong,
    updateSong,
    deleteSong,
    getAllSongs,
     generateStatistics
} from "../controllers/song.controller.js"

const router = express.Router();

router.route('/').get(getAllSongs);
router.route('/').post(createSong);
router.route('/:id').patch(updateSong);
router.route('/:id').delete(deleteSong);
router.route('/statistics').get(generateStatistics);


export default router;