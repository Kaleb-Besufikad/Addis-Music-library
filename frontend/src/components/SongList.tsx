import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Box, Card, Heading, Text, Button, Flex} from 'rebass';
import {Song} from '../types/songTypes';
import SongCard from "./SongCard/SongCard";
import Loading from "./Loading";
import CustomButton from "./CustomButton/CustomButton";
import Input from "./Input/Input";
import {Stats} from "../types/statisticsTypes";
import {DetailText} from "./SongCard/style";
import {CancelPresentation, FilterAlt} from '@emotion-icons/material-twotone';

interface SongListProps {
    currentId: string,
    setCurrentId: (value: (((prevState: string) => string) | string)) => void,
    isFormVisible: boolean,
    toggleFormVisibility: () => void,
    handleGenreFilter: (genre: string) => void,
    handleArtistFilter: (artist: string) => void,
    handleAlbumFilter: (album: string) => void,
    statistics: Stats,
}

export const SongList: React.FC<SongListProps> = ({
                                                      currentId,
                                                      setCurrentId,
                                                      isFormVisible,
                                                      toggleFormVisibility,
                                                      handleGenreFilter,
                                                      handleArtistFilter,
                                                      handleAlbumFilter,
                                                      statistics
                                                  }) => {
    const songs = useSelector((state: { songs: Song[] }) => state.songs);

    const [filterVisible, setFilterVisible] = useState(false);

    const handleFilterButtonClick = () => {
        if (filterVisible) {
            handleGenreFilter('');
            handleArtistFilter('');
            handleAlbumFilter('');
        }
        setFilterVisible(!filterVisible);

    };

    return (
        <Box>
            <Box className='blurry-background' sx={{display: filterVisible ? 'block' : 'none', borderRadius: '5px', padding: '0.5em'}}>
                {statistics.totalGenres && <Flex sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.29)'}}>
                    <CancelPresentation color='white' size={32} className='clear-button '
                                        onClick={(e) => handleGenreFilter('')}/>
                    <DetailText mt={2} mr={4}>Genres</DetailText>
                    {statistics.totalGenres.map(genre => (
                        <Input key={genre} name="genre" value={genre} id={genre} label={genre} type='radio'
                               onChange={(e) => handleGenreFilter(e.target.value)}
                        />
                    ))}
                </Flex>}
                {statistics.totalArtists && <Flex sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.29)'}}>
                    <CancelPresentation color='white' size={32} className='clear-button '
                                        onClick={(e) => handleArtistFilter('')}/>
                    <DetailText mt={2} mr={4}>Artists</DetailText>
                    {statistics.totalArtists.map(artist => (
                        <Input key={artist} name="artist" value={artist} id={artist} label={artist} type='radio'
                               onChange={(e) => handleArtistFilter(e.target.value)}
                        />
                    ))}
                </Flex>}

                {statistics.totalAlbums && <Flex>
                    <CancelPresentation color='white' size={32} className='clear-button '
                                        onClick={(e) => handleAlbumFilter('')}/>
                    <DetailText mt={2} mr={4}>Albums</DetailText>
                    {statistics.totalAlbums.map(album => (
                        <Input key={album} name="album" value={album} id={album} label={album} type='radio'
                               onChange={(e) => handleAlbumFilter(e.target.value)}
                        />
                    ))}
                </Flex>}
            </Box>
                <Button onClick={handleFilterButtonClick}  className='edit-button'>{filterVisible ? 'Hide Filters' : 'Filter' }&nbsp;<FilterAlt size={20}/></Button>
            {!songs.length ? <Loading size={10}/> :

                <Box
                    sx={{
                        paddingTop: '10px',
                        display: 'grid',
                        gridGap: '20px',
                        gridTemplateColumns: ['1fr', '1fr', '1fr 1fr', '1fr 1fr 1fr'],
                    }}
                >
                    {songs.map(song => (
                        <div key={song._id}>
                            <SongCard song={song} currentId={currentId} setCurrentId={setCurrentId}
                                      toggleFormVisibility={toggleFormVisibility} isFormVisible={isFormVisible}/>
                        </div>
                    ))}
                </Box>}</Box>
    );
};
