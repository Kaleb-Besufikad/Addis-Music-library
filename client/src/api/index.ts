import axios, {AxiosResponse} from 'axios';
import {Song} from "../types/songTypes";

axios.defaults.baseURL = 'http://localhost:8080';
const url = "songs/";

export const getSongList = async () => await axios.get(url);

export const addSong =  async (song: {
    duration: number;
    artist: string;
    album: string;
    genre: string[];
    id: string;
    title: string
}) => await axios.post(url, song);

export const updateSong = async (id: string, updatedSong: {
    duration: number;
    artist: string;
    album: string;
    genre: string[];
    id: string;
    title: string
}) => await axios.patch(`${url}${id}`, updatedSong);
export const deleteSong = async (id:string) => await axios.delete(`${url}${id}`)

export const getStats = async () => await axios.get(`${url}statistics`)