import React, { useState, useEffect } from 'react';
import { getSongList } from "./actions/songs";
import { Box } from 'rebass';
import Navbar from "./components/Navbar/Navbar";
import { SongList } from "./components/SongList";
import { useAppDispatch } from "./hooks";
import {  useParams } from "react-router-dom";
import StatsPage from "./components/StatsPage/StatsPage";
import {fetchStatistics} from "./actions/statstics";
import {useSelector} from "react-redux";
import {Stats as StatsType} from "./types/statisticsTypes";

function App() {
    const dispatch = useAppDispatch();
    const statistics = useSelector((state: { statistics: StatsType }) => state.statistics);


    const [currentId, setCurrentId] = useState<string>('');
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState<string>('');
    const [selectedArtist, setSelectedArtist] = useState<string>('');
    const [selectedAlbum, setSelectedAlbum] = useState<string>('');
    const params = useParams();

    const updateData= () => {
        dispatch(getSongList({ genre: selectedGenre, artist: selectedArtist, album: selectedAlbum }));
        dispatch(fetchStatistics());
    }
    useEffect(() => {
        updateData()
        if (!isFormVisible) {
            updateData()
        }

        // keep the data upto date
        const interval = setInterval(() => {
        updateData()
        }, 10000);
        return () => clearInterval(interval);
    }, [dispatch, currentId, params, selectedGenre, selectedArtist, selectedAlbum, isFormVisible]);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
        if (currentId !== '' && !isFormVisible) {
            setIsFormVisible(true);
        }
        if (isFormVisible) {
            setCurrentId('')
        }
    };

    const handleGenreFilter = (genre: string) => {
        setSelectedGenre(genre);
    };

    const handleArtistFilter = (artist: string) => {
        setSelectedArtist(artist);
    };

    const handleAlbumFilter = (album: string) => {
        setSelectedAlbum(album);
    };

    const handleFormSubmit = () => {
        toggleFormVisibility()
    };

    return (
        <Box>
            <header className="App-header">
                <Navbar isFormVisible={isFormVisible} toggleFormVisibility={toggleFormVisibility} currentId={currentId} setCurrentId={setCurrentId} handleFormSubmit={handleFormSubmit} />
            </header>
            <Box p={3} >
                {params && params.page === 'stats' ? <StatsPage /> :
                    <SongList setCurrentId={setCurrentId} currentId={currentId} isFormVisible={isFormVisible}
                              toggleFormVisibility={toggleFormVisibility} handleGenreFilter={handleGenreFilter}
                              handleArtistFilter={handleArtistFilter} handleAlbumFilter={handleAlbumFilter}
                              statistics={statistics}
                        />
                }
            </Box>
        </Box>
    );
}

export default App;
