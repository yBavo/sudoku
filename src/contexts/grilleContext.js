import React, { useReducer } from "react";
import reducer, { initialState } from "../reducers/grille";

const GrilleContext = React.createContext();

export const GrilleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Fonction qui annule le dernier numéro entré
   */
  const annuler = () => {
    return state.grilleSaved.length - 1 > 0
      ? dispatch({
          type: "ANNULER",
        })
      : dispatch({
          type: "RESET",
        });
  };

  const load = () =>
    dispatch({
      type: "LOAD",
    });

  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  const updateNumpadSelection = (n) => {
    if (n < 0 || n > 9) {
      console.log(`\tupdateNumpadSelection - N: ${n} out of range`);
      return;
    }

    dispatch({
      type: "UPDATE_NUMPAD_SELECTION",
      payload: n,
    });
  };

  /**
   * Update la grille avec le chiffre sélectionné
   * @param {position {ligne, colonne}} pos
   */
  const updateGrille = (pos) => {
    if (pos === {}) return;

    const { l, c } = pos;

    return !!state.grilleStart[l][c] ||
      (!!!state.numpadNSelected && !!!state.grille[l][c])
      ? dispatch({
          type: "UPDATE_CELL_SELECTED",
          payload: pos,
        })
      : dispatch({
          type: "UPDATE_GRILLE",
          payload: pos,
        });
  };

  const useBlock = (pos) => {
    return Math.floor(pos.l / 3) * 3 + Math.floor(pos.c / 3);
  };

  const validate = (n, pos) => {};

  return (
    <GrilleContext.Provider
      value={{
        state,
        annuler,
        load,
        reset,
        useBlock,
        updateGrille,
        updateNumpadSelection,
      }}
    >
      {children}
    </GrilleContext.Provider>
  );
};

export default GrilleContext;
