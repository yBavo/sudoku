import React, { useReducer } from "react";
import Grille from "../components/Grille";
import NumPad from "../components/NumPad";
import GrilleContext from "../contexts/grilleContext";
import grilleReducer from "../reducers/grille";

const initGrid = () => {
  const newGrid = [];
  const line = [null, null, null, null, null, null, null, null, null];

  for (let l = 0; l < 9; l++) {
    newGrid.push([...line]);
  }

  return newGrid;
};

const setCell = (cell, pos) => {
  console.log(cell, pos);
};

const App = () => {
  const [grille, grilleDispatch] = useReducer(grilleReducer, initGrid());
  //const [grid, dispatch] = useContext(GrilleContext);
  //const [numSelected, setNumSelected] = useState(null);
  console.log("APP\n", grille);
  return (
    <>
      <GrilleContext.Provider value={{ grille, grilleDispatch }}>
        <Grille />
      </GrilleContext.Provider>
      <NumPad />
      <button onClick={() => grilleDispatch({ type: "LOAD" })}>Load</button>
      <button onClick={() => grilleDispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};

export default App;
