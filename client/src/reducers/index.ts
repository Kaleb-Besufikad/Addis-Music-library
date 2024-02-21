import {combineReducers} from "@reduxjs/toolkit";

import songs from "./songs";
import statistics from "./statsistics";
export default combineReducers({
    songs,
    statistics
});
