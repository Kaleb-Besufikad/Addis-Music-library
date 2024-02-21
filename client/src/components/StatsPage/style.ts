import styled from "@emotion/styled";
import {DetailText, Title} from "../SongCard/style";
import {Box} from "rebass";

export const StatDetail = styled(DetailText)`
  display: flex;
  padding-inline: 2em;
  margin-inline-end: 2em;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.29);
  margin-top: 0.5em;
  padding-bottom: 0.2em;
`
export const StatTitle = styled(Title)`
  display: flex;
  margin:auto 1em;
  padding-top: 0.5em;
`
export const StatBox = styled(Box)`
  height: 100% !important;
  margin: 0.5em;
  text-align: center;
  width: 100%;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: linear-gradient(to bottom right, orangered, tan);

`