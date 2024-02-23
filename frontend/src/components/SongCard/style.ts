import styled from "@emotion/styled";
import {Card, Heading, Text} from "rebass";


export const DetailText = styled(Text)`
  font-size: 18px;
  margin-bottom: 5px;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  color: aliceblue;
`;

export const StyledCard = styled(Card)`
  max-width: 100%;
  z-index: -10;
  padding: 10px;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;


  background-color: rgba(40, 37, 34, 0.5) !important;
  backdrop-filter: blur(10px) !important;



  &:hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 760px) {
    display: grid;
    grid-template-columns: 2fr;
    grid-template-rows: auto 1fr;
    align-items: center;
  }
`;
export const Title = styled(Heading)`
  font-size: 1.3em;
  letter-spacing: 3px;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  color: mistyrose;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  

`;
