
import styled from "@emotion/styled";
import {Flex} from "rebass";
export const FormContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0.5em auto;
  border-radius: 0.5em;
  border: 1px solid darkslateblue;
  max-width: 500px;
  box-shadow: 0px 4px 6px rgba(72, 61, 139, 0.7);
  transition: transform 0.3s ease-in-out;
  transform: translateY(${props => (props.isVisible ? '0' : '-150%')});
  z-index: 0;
  background:  linear-gradient(to bottom right,orangered, tan);
`
export const StyledNavbar = styled(Flex)`
  background-color: transparent;
  color: #fff;
  padding: 10px 20px;
  position: relative;
  z-index:10

`;