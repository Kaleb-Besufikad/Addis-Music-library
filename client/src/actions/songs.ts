import {Dispatch} from "@reduxjs/toolkit";
import * as api from "../api";
import {AddSongAction, DeleteSongAction, GetSongsAction, Song, UpdateSongAction} from "../types/songTypes";
import {GET_SONGS, ADD_SONG, UPDATE_SONG, DELETE_SONG, SongActionTypes} from '../types/songTypes';

export const getSongList = () => async (dispatch: Dispatch<GetSongsAction>) => {
    try {
    const {data}= await api.getSongList();
    dispatch({type: GET_SONGS, payload: data});
    } catch (e) {
        console.log(e);
    }
};


export const addSong = (song: {
    duration: number;
    artist: string;
    album: string;
    genre: string[];
    id: string;
    title: string
}) => async (dispatch: Dispatch<AddSongAction>) => {
    try {
        const {data} = await api.addSong(song);
        dispatch({type: ADD_SONG, payload: data});
    } catch (e) {
        console.log(e);
    }
};

export const updateSong = (id: string, song: {
    duration: number;
    artist: string;
    album: string;
    genre: string[];
    id: string;
    title: string
}) => async (dispatch: Dispatch<UpdateSongAction>) => {
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
