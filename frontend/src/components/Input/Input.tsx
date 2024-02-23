import React from "react";
import {StyledInput, StyledInputWrapper, StyledRadioInput} from "./style";
import { Text } from "rebass";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    type: string;
}

const Input: React.FC<InputProps> = ({ id, label, type, ...rest }) => {
    const InputComponent = type === "radio" ? StyledRadioInput : StyledInput;
    const inputProps = type === "radio" ? { type: "radio", ...rest } : rest;

    return (
        <StyledInputWrapper>
            <Text as='label' htmlFor={id} sx={{ color: 'antiquewhite', fontSize: '0.8em' }}>{label} &nbsp;
                <InputComponent id={id} {...inputProps} />
            </Text>
        </StyledInputWrapper>
    );
};

export default Input;
