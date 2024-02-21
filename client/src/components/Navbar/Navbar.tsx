import React, {useState} from 'react';
import {Heading, Box} from 'rebass';
import SongForm from "../Form/SongForm";
import {FormContainer, StyledNavbar} from "./style";
import CustomButton from "../CustomButton/CustomButton";
import StatsPage from "../StatsPage/StatsPage";
import {InfoCircle} from '@emotion-icons/fa-solid/';
import {Link} from "react-router-dom";

interface NavbarProps {
    isFormVisible: boolean,
    handleFormSubmit: () => void,
    currentId: string,
    setCurrentId: (value: (((prevState: string) => string) | string)) => void,
    toggleFormVisibility: () => void
}

const Navbar: React.FC<NavbarProps> = ({
                                           isFormVisible,
                                           handleFormSubmit,
                                           currentId,
                                           setCurrentId,
                                           toggleFormVisibility
                                       }: NavbarProps) => {

    const [displayStats, setDisplayStats] = useState(false);
    return (
        <><StyledNavbar alignItems="center" justifyContent="space-between">
            <Heading fontSize={[3, 4]} fontWeight="bold" fontFamily='Roboto'>
                <Link to="/" className='logo'>Addis Music Library</Link>
                <Link to="/stats">
                    <InfoCircle
                    className="info-button"
                    size={32}

                    // onClick={() => {
                    //             setDisplayStats(!displayStats)
                    // }}
                />
                </Link>
            </Heading>
            <CustomButton variant="filled" onClick={toggleFormVisibility} sx={{
                fontWeight: 'bold',
                fontSize: '1.5em',
                padding: '5px 15px !important',
                margin: ' !important'
            }}>{isFormVisible ? '×' : '+'}</CustomButton>

            <FormContainer isVisible={isFormVisible}>
                <Box sx={{
                    backgroundColor: 'bisque', color: 'purple', borderRadius: '0.5em 0.5em 0 0', padding: '0.5em',
                }}>
                    <Heading as="h3" sx={{fontFamily: 'Roboto', textAlign: 'center'}}>
                        {currentId ? 'Edit' : 'Add New'} Song
                    </Heading>
                </Box>

                <SongForm onSubmit={handleFormSubmit} currentId={currentId} setCurrentId={setCurrentId}/>
            </FormContainer>
        </StyledNavbar>
            <Box display={displayStats ? 'flex' : 'none'}
                 sx={{justifyContent: 'center', position: 'absolute', bottom: 0, width: '100%'}}>
                <StatsPage/>
            </Box>
        </>
    );
};

export default Navbar;
