import React, { useContext } from "react";
import styled from "styled-components";
import GrilleContext from "../contexts/grilleContext";

const NumpadCell = ({ n }) => {
  const { numpadNSelected, setNumpadNSelected } = useContext(GrilleContext);

  return (
    <CellContainer
      onClick={() => setNumpadNSelected(n)}
      active={numpadNSelected === n}
    >
      <CellText>{n}</CellText>
    </CellContainer>
  );
};

const CellContainer = styled.button`
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ active }) => {
    return active
      ? "#99ddff"
      : "-internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59))";
  }};
`;
const CellText = styled.div`
  font-size: 30px;
`;

export default NumpadCell;
