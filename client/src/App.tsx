import React, {useState,useEffect} from 'react';
import {getSongList} from "./actions/songs";

import {Box} from 'rebass';
import Navbar from "./components/Navbar/Navbar";
import {SongList} from "./components/SongList";
import {useAppDispatch} from "./hooks";
import {Outlet, useParams} from "react-router-dom";
import StatsPage from "./components/StatsPage/StatsPage";


function App() {
    const dispatch = useAppDispatch();
    const [currentId, setCurrentId] = useState<string>('');
    const [isFormVisible, setIsFormVisible] = useState(false);
    const params = useParams();

    useEffect(()=> {
        dispatch(getSongList());
    },[dispatch, currentId])

    const toggleFormVisibility = () => {

        setIsFormVisible(!isFormVisible);
        if(currentId!=='' && !isFormVisible){
            setIsFormVisible(true);
        }
        if(isFormVisible){
            setCurrentId('')
        }
    };
    const handleFormSubmit = () => {
        toggleFormVisibility()
    };

    return (
        <Box>
            <header className="App-header">
                <Navbar isFormVisible={isFormVisible} toggleFormVisibility={toggleFormVisibility} currentId={currentId} setCurrentId={setCurrentId} handleFormSubmit={handleFormSubmit}/>
            </header>
            <Box p={3} >
                {params && params.page === 'stats' ? <StatsPage/> :
                    <SongList setCurrentId={setCurrentId} currentId={currentId} isFormVisible={isFormVisible}
                              toggleFormVisibility={toggleFormVisibility}/>
                }
            </Box>
        </Box>
    );
}

export default App;
