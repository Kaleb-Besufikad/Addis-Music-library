import {GET_SONGS, ADD_SONG, UPDATE_SONG, DELETE_SONG, SongActionTypes, Song} from '../types/songTypes';


const reducer = (songs = [], action:any) => {
    switch (action.type) {
        case GET_SONGS:
            return action.payload;
        case ADD_SONG:
            return [...songs, action.payload];
        case UPDATE_SONG:
            return songs.map((song:Song) => song._id === action.payload._id ? action.payload : song);
        case DELETE_SONG:
            return songs.filter((song: Song)=> song._id !== action.payload);
        default:
            return songs;
    }
};


export default reducer;
