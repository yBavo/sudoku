import React from "react";
import styled from "styled-components";

import Cell from "./Cell";

const GrilleLines = ({ line, l }) => {
  return (
    <GridLine>
      {line.map((num, c) => (
        <Cell num={num} pos={{ l, c }} key={`cell-${l}${c}`} />
      ))}
    </GridLine>
  );
};

const GridLine = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

export default GrilleLines;
