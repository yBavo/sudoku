import React, { useContext } from "react";
import styled from "styled-components";
import GrilleContext from "../contexts/grilleContext";
import GrilleLines from "./GrilleLines";

const Grille = () => {
  const { grille } = useContext(GrilleContext);
  console.log("GRID\n");
  return (
    <GridContainer>
      {grille.map((line, l) => (
        <GrilleLines line={line} l={l} key={`grille-line-${l}`} />
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f0f8ff;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export default Grille;
