import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Box, Button, Flex} from 'rebass';
import {Song} from '../types/songTypes';
import SongCard from "./SongCard/SongCard";
import Loading from "./Loading";
import Input from "./Input/Input";
import {Stats} from "../types/statisticsTypes";
import {DetailText} from "./SongCard/style";
import {CancelPresentation, FilterAlt} from '@emotion-icons/material-twotone';
import {useAppDispatch} from "../hooks";
import {getSongList} from "../actions/songs";

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
    const dispatch = useAppDispatch();
    const [filterVisible, setFilterVisible] = useState(false);

    const handleFilterButtonClick = () => {
        if (filterVisible) {
            handleGenreFilter('');
            handleArtistFilter('');
            handleAlbumFilter('');
        }
        setFilterVisible(!filterVisible);

    };
    useEffect(() => {
        dispatch(getSongList());
        setFilterVisible(false);
    }, [currentId, isFormVisible, ]);


    return (
        <Box>
            <Box className='blurry-background'
                 sx={{display: filterVisible ? 'block' : 'none', borderRadius: '5px', padding: '0.5em'}}>
                {statistics.totalGenres &&
                    <Flex sx={{flexDirection: 'column', borderBottom: '1px solid rgba(255, 255, 255, 0.29)'}}>
                        <Flex>
                            <CancelPresentation color='white' size={32} className='clear-button '
                                                onClick={(e) => handleGenreFilter('')}/>
                            <DetailText className='disable-ellipsis' mt={2} mr={4}>Genres</DetailText>
                        </Flex>
                        <Flex sx={{flexWrap: 'wrap'}}>
                            {statistics.totalGenres.map(genre => (
                                <Box  key={genre} as='span' sx={{margin: '0.3em', borderRadius: '5px' , backgroundColor: 'rgba(171,171,171,0.29)'}}>
                                    <Input name="genre" value={genre} id={genre} label={genre} type='radio'
                                           onChange={(e) => handleGenreFilter(e.target.value)}
                                    />
                                </Box>
                            ))}
                        </Flex>
                    </Flex>}
                {statistics.totalArtists &&
                    <Flex sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.29)', flexDirection: 'column',}}>
                        <Flex>
                            <CancelPresentation color='white' size={32} className='clear-button '
                                                onClick={(e) => handleArtistFilter('')}/>
                            <DetailText className='disable-ellipsis' mt={2} mr={4}>Artists</DetailText>
                        </Flex>
                        <Flex sx={{flexWrap: 'wrap'}}>
                            {statistics.totalArtists.map(artist => (
                                <Box key={artist} as='span' sx={{margin: '0.3em', borderRadius: '5px' , backgroundColor: 'rgba(171,171,171,0.29)'}}>

                                <Input  name="artist" value={artist} id={artist} label={artist} type='radio'
                                       onChange={(e) => handleArtistFilter(e.target.value)}
                                /></Box>
                            ))}
                        </Flex>
                    </Flex>}

                {statistics.totalAlbums &&
                    <Flex sx={{flexDirection: 'column',}}>
                        <Flex>
                            <CancelPresentation color='white' size={32} className='clear-button '
                                                onClick={(e) => handleAlbumFilter('')}/>
                            <DetailText className='disable-ellipsis' mt={2} mr={4}>Albums</DetailText>
                        </Flex>
                        <Flex sx={{flexWrap: 'wrap'}}>

                            {statistics.totalAlbums.map(album => (
                                <Box  key={album} as='span' sx={{margin: '0.3em', borderRadius: '5px' , backgroundColor: 'rgba(171,171,171,0.29)'}}>

                                <Input name="album" value={album} id={album} label={album} type='radio'
                                       onChange={(e) => handleAlbumFilter(e.target.value)}
                                /></Box>
                            ))}
                        </Flex>
                    </Flex>}
            </Box>
            <Button onClick={handleFilterButtonClick}
                    className='edit-button'>{filterVisible ? 'Hide Filters' : 'Filter'}&nbsp;<FilterAlt
                size={20}/></Button>
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
