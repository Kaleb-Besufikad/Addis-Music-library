import React, {useEffect, useState} from 'react';
import {Box, Button} from "rebass";
import Input from "../Input/Input";
import CustomButton from "../CustomButton/CustomButton";
import {addSong, updateSong} from "../../actions/songs"
import {useSelector} from "react-redux";
import {Song} from "../../types/songTypes";
import {useAppDispatch} from "../../hooks";


interface FormProps {
    onSubmit: () => void,
    currentId: string
    setCurrentId: (value: (((prevState: string) => string) | string)) => void
}

const SongForm: React.FC<FormProps> = ({onSubmit, currentId, setCurrentId}) => {
    const [songData, setSongData] = useState({
        _id: '',
        title: '',
        artist: '',
        album: '',
        genre: [''],
        duration: 0
    });
    let song = useSelector((state: { songs: Song[] }) => {
        return currentId ? state.songs.find((s) => {
            return s._id === currentId
        }) : null
    });
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (song) {
            setSongData({
                _id: song._id,
                title: song.title,
                artist: song.artist,
                album: song.album,
                genre: song.genre,
                duration: song.duration

            })
        }
        if(currentId===""){
            setSongData({
                _id: '',
                title: '',
                artist: '',
                album: '',
                genre: [],
                duration: 0
            })        }
    }, [song, currentId])
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (currentId !== '') {
            dispatch(updateSong(songData._id, songData));
        }else {
            dispatch(addSong(songData));
        }
        onSubmit();
        setCurrentId('');
    }

    const getDuration = (duration: number) => {
        const durationInMinutes = Math.floor(duration / 60);
        const durationSeconds = duration % 60;
        return `${durationInMinutes}:${durationSeconds < 10 ? `0${durationSeconds}` : durationSeconds}`;
    }
    return (
        <Box pl={5} sx={{margin: '0.5em auto' ,zIndex: 100}} pb={5}>
            <form onSubmit={handleSubmit}>
                <Input id="title" type="text" label="Song Title" value={songData.title} required
                       onChange={(e) => setSongData({...songData, title: e.target.value})}
                       placeholder="Enter title of song..."/>
                <Input id="artist" type="text" label="Song Artist" value={songData.artist} required
                       onChange={(e) => setSongData({...songData, artist: e.target.value})}
                       placeholder="Enter singer..."/>
                <Input id="album" type="text" label="Song Album" value={songData.album} required
                       onChange={(e) => setSongData({...songData, album: e.target.value})}
                       placeholder="Enter album..."/>
                <Input id="genre" type="text" label="Song Genre" value={songData.genre} required
                       onChange={(e) => setSongData({...songData, genre: e.target.value.split(',')})}
                       placeholder="Enter song genre..."/>
                <Input id="duration" type="number" label={`Song Duration (${getDuration(songData.duration)})`} value={songData.duration}
                       onChange={(e) => setSongData({...songData, duration: +e.target.value})}
                       placeholder="Song duratioin" step={10} min={30} max={600} />
                <CustomButton type="submit" sx={{width: '80%', marginTop: '1em !important',}} >Submit</CustomButton>
            </form>
        </Box>
    );
}

export default SongForm;