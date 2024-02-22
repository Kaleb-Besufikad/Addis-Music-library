import React from 'react';
import {useSelector} from "react-redux";
import {Box, Card, Heading, Text} from 'rebass';
import {Song} from '../types/songTypes';
import SongCard from "./SongCard/SongCard";
import Loading from "./Loading";


interface SongListProps {
    currentId: string,
    setCurrentId: (value: (((prevState: string) => string) | string)) => void,
    isFormVisible: boolean,
    toggleFormVisibility: () => void,
}

export const SongList: React.FC<SongListProps> = ({
                                                      currentId,
                                                      setCurrentId,
                                                      isFormVisible,
                                                      toggleFormVisibility,
                                                  }) => {

    let songs = useSelector((state: { songs: Song[] }) => state.songs);

    return (
        !songs.length ? <Loading size={10}/>:
            <Box
                sx={{
                    display: 'grid',
                    gridGap: '20px',
                    gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
                }}
            >
                {songs.map(song => (
                    <div key={song._id}>
                        <SongCard song={song} currentId={currentId} setCurrentId={setCurrentId}
                                  toggleFormVisibility={toggleFormVisibility} isFormVisible={isFormVisible}/>
                    </div>
                ))}
            </Box>
    );
}