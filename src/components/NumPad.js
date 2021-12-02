import React, { useContext } from "react";
import styled from "styled-components";
import GrilleContext from "../contexts/grilleContext";
import NumpadCell from "./NumpadCell";

const NUM = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const NumPad = () => {
  const { numpadNSelected, setNumpadNSelected } = useContext(GrilleContext);

  return (
    <NumPadContainer>
      {NUM.map((line, l) => (
        <NumPadLine key={`numpad-${line}${l}`}>
          {line.map((n, i) => (
            <NumpadCell n={n} key={`numpad-${n}${i}`} />
          ))}
        </NumPadLine>
      ))}
      <CellContainer
        active={numpadNSelected === 0}
        onClick={() => setNumpadNSelected(0)}
      >
        <CellText>Effacer</CellText>
      </CellContainer>
    </NumPadContainer>
  );
};

const NumPadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(220, 220, 220);
  margin-top: 25px;
`;
const NumPadLine = styled.div`
  display: flex;
  flex-direction: row;
`;
const CellContainer = styled.button`
  justify-content: center;
  width: 120px;
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
export default NumPad;
