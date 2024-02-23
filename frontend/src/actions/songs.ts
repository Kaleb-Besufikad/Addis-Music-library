import {Dispatch} from "@reduxjs/toolkit";
import * as api from "../api";
import {AddSongAction, DeleteSongAction, GetSongsAction, Song, UpdateSongAction} from "../types/songTypes";
import {GET_SONGS, ADD_SONG, UPDATE_SONG, DELETE_SONG} from '../types/songTypes';

export const getSongList = (filters?: any) => async (dispatch: Dispatch<GetSongsAction>) => {
    try {
    const {data}= await api.getSongList(filters);
    dispatch({type: GET_SONGS, payload: data});
    } catch (e) {
        console.log(e);
    }
};


export const addSong = (song: Song) => async (dispatch: Dispatch<AddSongAction>) => {
    try {
        const {data} = await api.addSong(song);
        dispatch({type: ADD_SONG, payload: data});
    } catch (e) {
        console.log(e);
    }
};

export const updateSong = (id: string, song: Song) => async (dispatch: Dispatch<UpdateSongAction>) => {
    try {
        const {data} = await api.updateSong(id, song);
        dispatch({type: UPDATE_SONG, payload: data});
    } catch (e) {
        console.log(e);
    }
};
export const deleteSong = (id: string)=> async (dispatch: Dispatch<DeleteSongAction>) => {
    try {
        await api.deleteSong(id);
        dispatch({type: DELETE_SONG, payload: id});
    } catch (e) {
        console.log(e);
    }
};
