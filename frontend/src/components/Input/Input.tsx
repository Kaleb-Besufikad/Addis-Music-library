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
        <StyledInputWrapper style={{ display: 'flex', alignItems: 'center', paddingRight:'0.5em' }}>
            <Text as='label' htmlFor={id} sx={{ color: 'antiquewhite', fontSize: '0.8em' , marginInline: type==='radio'?'0':'0.5em', marginBlock: type==='radio'?'-0.5em':'0'}}>
                <InputComponent id={id} {...inputProps} />
                {label}
            </Text>
        </StyledInputWrapper>
    );
};

export default Input;
