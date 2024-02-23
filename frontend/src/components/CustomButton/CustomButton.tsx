import React from 'react';
import {Button as RebassButton} from 'rebass';
import styled from '@emotion/styled';

const CustomButton = styled(RebassButton)`
  background-color: darkslategrey;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  box-shadow: -1px 4px 6px rgba(139, 100, 61, 0.7);


  &:hover {
    background-color: #8b693d;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: none;
  }
`;


export default CustomButton;