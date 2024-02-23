import express from "express";

import {
    createSong,
    updateSong,
    deleteSong,
    getAllSongs
} from "../controllers/song.controller.js"
import {generateStatisticsController} from "../controllers/generateStatistics.controller.js";

const router = express.Router();

router.route('/').get(getAllSongs);
router.route('/').post(createSong);
router.route('/:id').patch(updateSong);
router.route('/:id').delete(deleteSong);
router.route('/statistics').get(generateStatisticsController);


export default router;