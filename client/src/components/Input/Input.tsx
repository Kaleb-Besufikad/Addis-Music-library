import React from "react";
import { StyledInput, StyledInputWrapper } from "./style";
import {Text} from "rebass";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    type: string;
}


const Input: React.FC<InputProps> = (props) => {
    return (
        <StyledInputWrapper>
            <Text as='label' htmlFor={props.id} sx={{color: 'antiquewhite', fontSize:'0.8em'}}>{props.label} &nbsp;<StyledInput {...props} /></Text>
        </StyledInputWrapper>
    );
};

export default Input;