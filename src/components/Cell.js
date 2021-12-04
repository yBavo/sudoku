import React, { useContext } from "react";
import styled from "styled-components";

import GrilleContext from "../contexts/grilleContext";

const Cell = ({ num = null, pos = {} }) => {
  const { useBlock, state, updateGrille } = useContext(GrilleContext);
  const { cellSelected, grilleStart } = state;

  const block = useBlock(pos);
  const blockSelected = useBlock(cellSelected);
  const cellStart = grilleStart.length && !!grilleStart[pos.l][pos.c] ? 1 : 0;

  return (
    <Container>
      <CellButton
        pos={pos}
        cellSelected={cellSelected}
        sameBlock={block === blockSelected}
        onClick={() => updateGrille(pos)}
      >
        <CellText start={cellStart}>{num}</CellText>
      </CellButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
`;

const CellButton = styled.button`
  flex-grow: 1;
  background-color: ${({ pos, cellSelected, sameBlock }) => {
    return cellSelected.l === pos.l || cellSelected.c === pos.c || sameBlock
      ? "#fff0e6"
      : "white";
  }};
  border-top-width: ${({ pos }) =>
    pos.l === 0 || pos.l === 3 || pos.l === 6 ? "2px" : "0.5px"};
  border-right-width: ${({ pos }) => (pos.c === 8 ? "2px" : "0.5px")};
  border-bottom-width: ${({ pos }) => (pos.l === 8 ? "2px" : "0.5px")};
  border-left-width: ${({ pos }) =>
    pos.c === 0 || pos.c === 3 || pos.c === 6 ? "2px" : "0.5px"};
`;
const CellText = styled.div`
  font-size: 30px;
  color: ${({ start }) => (start ? "black" : "#005580")};
`;

export default Cell;
