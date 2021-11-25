import React, { useContext } from "react";
import styled from "styled-components";
//import GridContext from '../context/gridContext';

const Cell = ({ num = null, pos = {} }) => {
  const { l, c } = pos;

  return (
    <Container>
      <CellButton pos={pos}>
        <CellText>{num}</CellText>
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
  border-top-width: ${(p) =>
    p.pos.l === 0 || p.pos.l === 3 || p.pos.l === 6 ? "2px" : "0.5px"};
  border-right-width: ${(p) => (p.pos.c === 8 ? "2px" : "0.5px")};
  border-bottom-width: ${(p) => (p.pos.l === 8 ? "2px" : "0.5px")};
  border-left-width: ${(p) =>
    p.pos.c === 0 || p.pos.c === 3 || p.pos.c === 6 ? "2px" : "0.5px"};
`;
const CellText = styled.div`
  font-size: 30px;
`;

export default Cell;
