import React from "react";
import styled from "styled-components";

const NumPad = () => {
  const num = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <NumPadContainer>
      {num.map((line, l) => (
        <NumPadLine key={`numpad-${line}${l}`}>
          {line.map((n, i) => (
            <CellContainer
              onMouseDown={() => console.log(`Pese sur chiffre : ${n}`)}
              key={`numpad-${n}${i}`}
            >
              <CellText>{n}</CellText>
            </CellContainer>
          ))}
        </NumPadLine>
      ))}
    </NumPadContainer>
  );
};

const NumPadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(220, 220, 220);
`;
const NumPadLine = styled.div``;
const CellContainer = styled.button`
  justify-content: center;
  width: 40px;
  height: 40px;
`;
const CellText = styled.div`
  font-size: 30px;
`;
export default NumPad;
