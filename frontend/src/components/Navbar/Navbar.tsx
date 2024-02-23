import React, { useState } from 'react';
import { Heading, Box } from 'rebass';
import SongForm from "../Form/SongForm";
import { FormContainer, StyledNavbar } from "./style";
import CustomButton from "../CustomButton/CustomButton";
import { InfoSquareFill } from '@emotion-icons/bootstrap';
import { Link } from "react-router-dom";

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


    return (
        <>
            <StyledNavbar alignItems="center" justifyContent="space-between">
                <Link to="/" className='logo'>
                    <Heading fontSize={[4, 5, 5]} fontWeight="bold" className='logo' fontFamily='Gluten'>
                        Addis Music Library
                    </Heading>
                </Link>
                <Box display="flex" alignItems="center">
                    <Link to="/stats">
                        <InfoSquareFill
                            className="info-button"
                            size={38}
                            aria-label="Statistics"
                        />
                    </Link>
                    <CustomButton

                        variant="filled"
                        onClick={toggleFormVisibility}
                        mx={[0, 1, 2]}
                        sx={{
                            marginTop: '-0.3em',
                            fontWeight: 'bold',
                            fontSize: '1.5em',
                            padding: '5px 15px !important',
                        }}
                        aria-expanded={isFormVisible}
                        aria-haspopup="true"
                    >
                        {isFormVisible ? '×' : '+'}
                    </CustomButton>
                </Box>
            </StyledNavbar>
            <FormContainer isVisible={isFormVisible} className='blurry-background'>
                <Box sx={{
                    borderRadius: '0.5em 0.5em 0 0', padding: '0.5em',
                    zIndex: 1,
                    backgroundColor: 'rgba(235, 230, 230, 0.1) !important',
                    backdropFilter: 'blur(20px) !important'
                }}>
                    <Heading as="h3" sx={{fontFamily: 'Roboto', textAlign: 'center', color: 'aliceblue'}}>
                        {currentId ? 'Edit' : 'Add New'} Song
                    </Heading>
                </Box>

                <SongForm onSubmit={handleFormSubmit} currentId={currentId} setCurrentId={setCurrentId}/>
            </FormContainer></>
    );
};

export default Navbar;
