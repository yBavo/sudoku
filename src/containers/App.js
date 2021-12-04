import React, { useContext, useEffect } from "react";
import Grille from "../components/Grille";
import NumPad from "../components/NumPad";
import GrilleContext from "../contexts/grilleContext";

const App = () => {
  const { annuler, state, load, reset } = useContext(GrilleContext);
  const { grilleSaved } = state;

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <Grille />
      <NumPad />
      <button onClick={() => load()}>Load</button>
      <button onClick={() => reset()}>Reset</button>
      <button disabled={!grilleSaved.length} onClick={() => annuler()}>
        Annuler
      </button>
    </div>
  );
};

export default App;
