
import styled from "@emotion/styled";
import {Flex} from "rebass";
export const FormContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  margin: 0.5em auto;
  border-radius: 0.5em;
  border: none;
  max-width: 500px;
  box-shadow: 0px 4px 6px rgba(31, 32, 32, 0.63);
  transition: transform 0.3s ease-in-out;
  transform: translateY(${props => (props.isVisible ? '0' : '-150%')});
  z-index: 100;

  background-color: rgba(35, 30, 30, 0.6) !important;
  backdrop-filter: blur(20px) !important;
`
export const StyledNavbar = styled(Flex)`
  color: #fff;
  padding: 10px 20px;
  position: relative;
  z-index:10;
  
  background-color: rgba(35, 30, 30, 0.6) !important;
  backdrop-filter: blur(20px) !important;

`;