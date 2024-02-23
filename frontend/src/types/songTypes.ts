export interface Song {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string[];
    duration: number;
}

export interface SongState {
    songs: Song[];
}

export const GET_SONGS = 'GET_SONGS';
export const ADD_SONG = 'ADD_SONG';
export const UPDATE_SONG = 'UPDATE_SONG';
export const DELETE_SONG = 'DELETE_SONG';


// songTypes.ts
export interface GetSongsAction {
    type: typeof GET_SONGS;
    payload: Song[];
}

export interface AddSongAction {
    type: typeof ADD_SONG;
    payload: Song;
}

export interface UpdateSongAction {
    type: typeof UPDATE_SONG;
    payload: Song;
}

export interface DeleteSongAction {
    type: typeof DELETE_SONG;
    payload: string;
}

export type SongActionTypes = GetSongsAction | AddSongAction | UpdateSongAction | DeleteSongAction;
