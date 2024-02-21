import styled from "@emotion/styled";

export const StyledInput = styled.input<{ [key: string]: any }>`
  border: none;
  padding: 10px;
  margin: 5px auto;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  color: aliceblue;
  background-color: transparent;
  width: 100%;
  border-bottom: 1px solid coral;
  box-shadow: -1px 4px 4px rgba(214, 106, 67, 0.5);

  &::placeholder {
    color: navajowhite; 
  }
  
  &:hover,
  &:focus {
    //margin:3px auto;
    border: none;
    border-bottom: 2px solid lightblue;
    box-shadow: none;
  }

`
export const StyledInputWrapper = styled.div`
  padding: 5px 0;
  display: flex;
  
`;
