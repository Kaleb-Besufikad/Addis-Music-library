import React from 'react';
import {Button as RebassButton} from 'rebass';
import styled from '@emotion/styled';

// Define custom styles for the button
const CustomButton = styled(RebassButton)`
  background-color: darkslategrey;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  box-shadow: -1px 4px 6px rgba(72, 61, 139, 0.7);


  &:hover {
    background-color: darkslateblue;
    transform: scale(1.01);
    box-shadow: none;
  }
`;


export default CustomButton;