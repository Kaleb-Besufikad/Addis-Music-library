import React from 'react';
import {Song} from '../../types/songTypes';
import {deleteSong} from "../../actions/songs";

import {Edit, Trash2, Slash} from "@emotion-icons/evaicons-solid";
import {Image, Flex, Box, Button} from 'rebass';
import {Title, DetailText, StyledCard} from "./style";
import musicImg from '../../assets/images/music-note.png';
import {useAppDispatch} from "../../hooks";


import {Album} from '@emotion-icons/material-twotone'

interface Props {
    song: Song,
    currentId: string,
    setCurrentId: (value: (((prevState: string) => string) | string)) => void,
    isFormVisible: boolean,
    toggleFormVisibility: () => void
}

const SongCard: React.FC<Props> = ({song, currentId, setCurrentId, isFormVisible, toggleFormVisibility}) => {
    const durationInMinutes = Math.floor(song.duration / 60);
    const durationSeconds = song.duration % 60;
    const durationText = `${durationInMinutes}:${durationSeconds < 10 ? `0${durationSeconds}` : durationSeconds}`;
    const dispatch = useAppDispatch();

    const handleEdit = () => {
        setCurrentId(song._id)
        toggleFormVisibility()
    }
    return (
        <StyledCard>
            <Flex alignItems="right">
                <Box
                    mr={2}
                    sx={{maxWidth: '30%'}}
                >
                    <Image
                        src={musicImg}
                        alt="Music Icon"
                        width="100%"
                        height="100%"
                        css={{
                            objectFit: 'contain',
                        }}
                    />
                </Box>
                <Box flex="1">
                    <Box
                        sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                        <Box sx={{flexBasis: '70%', minWidth: 0, marginBottom: '10px'}}>
                            <Title as="h3" sx={{fontFamily: '"Gluten", cursive !important'}}>
                                {song.title}
                            </Title>
                            <DetailText className="disable-ellipsis"
                                        sx={{fontSize: '0.8em !important', marginLeft: '1em'}}>
                                {durationText}
                            </DetailText>
                        </Box>

                        <Box sx={{flexBasis: '30%', minWidth: 0, display: 'flex', justifyContent: 'flex-end'}}>
                            <Button color='white' className='edit-button' onClick={() => handleEdit()}
                                    disabled={isFormVisible && currentId !== ""}>
                                {!isFormVisible ? <Edit size='1em' title='Edit'/> :
                                    <Slash size='1em' title='Disabled'/>}
                            </Button>
                            <Button disabled={isFormVisible && currentId !== ""} className='delete-button'
                                    onClick={() => dispatch(deleteSong(song._id))}>
                                {!isFormVisible ? <Trash2 size='1em' title='Edit'/> :
                                    <Slash size='1em' title='Disabled'/>}
                            </Button>
                        </Box>
                    </Box>
                    <hr/>
                    <DetailText>
                        {song.artist}
                    </DetailText>
                    <DetailText> <Album size='1em' title='Album' style={{marginRight: '6px'}}/>{song.album}</DetailText>
                    <DetailText>{song.genre.map((item) => (
                        <Box key={item} as={'p'} className="disable-ellipsis tag">
                            {item}
                        </Box>
                    ))}</DetailText>
                </Box>
            </Flex>
        </StyledCard>
    )
        ;
};

export default SongCard;
