import axios from 'axios';
import {Song} from "../types/songTypes";

axios.defaults.baseURL = process.env.API_URL||'http://localhost:8080';
const url = "songs/";

export const getSongList = async (filters?: any) => await axios.get(url,{params: filters});

export const addSong =  async (song: Song) => await axios.post(url, song);

export const updateSong = async (id: string, updatedSong: Song) => await axios.patch(`${url}${id}`, updatedSong);
export const deleteSong = async (id:string) => await axios.delete(`${url}${id}`)

export const getStats = async () => await axios.get(`${url}statistics`)