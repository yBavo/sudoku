import { GRILLE_START } from "../data";
import { randomGrilleIndice } from "../helpers/grille";

export const initGrid = () => {
  const newGrid = [];
  const line = [null, null, null, null, null, null, null, null, null];

  for (let l = 0; l < 9; l++) {
    newGrid.push([...line]);
  }

  return newGrid;
};

export const initialState = {
  cellSelected: {},
  grille: initGrid(),
  grilleIndice: null,
  grilleSaved: [],
  grilleStart: [],
  numpadNSelected: null,
};

const reducer = (state = initGrid, { type, payload }) => {
  console.log("\tREDUCER\n", state);
  switch (type) {
    case "ANNULER":
      const len = state.grilleSaved.length - 1;
      const newGrilleSave = state.grilleSaved.filter((g, i) => i < len);
      console.log("ANNULER - len", len, newGrilleSave);
      return {
        ...state,
        cellSelected: {},
        grille: newGrilleSave[len - 1].map((line) => [...line]),
        grilleSaved: newGrilleSave,
        numpadNSelected: null,
      };

    case "LOAD":
      if (!GRILLE_START.length) return state;

      const newGrilleIndice = randomGrilleIndice(state.grilleIndice);
      const newLoadGrille = GRILLE_START[newGrilleIndice].map((line) => [
        ...line,
      ]);
      const newGrilleStart = GRILLE_START[newGrilleIndice].map((line) => [
        ...line,
      ]);

      return {
        ...initialState,
        grille: newLoadGrille,
        grilleStart: newGrilleStart,
        grilleIndice: newGrilleIndice,
      };

    case "UPDATE_CELL_SELECTED":
      return {
        ...state,
        cellSelected: payload,
      };

    case "UPDATE_GRILLE":
      const { l, c } = payload;
      const newGrille = state.grille.map((line) => [...line]); // Copie la grille
      newGrille[l][c] = state.numpadNSelected;

      return {
        ...state,
        cellSelected: payload,
        grille: newGrille,
        grilleSaved: [...state.grilleSaved, newGrille.map((line) => [...line])],
      };

    case "RESET":
      return {
        ...state,
        grille: state.grilleStart,
        cellSelected: {},
        grilleSaved: [],
        numpadNSelected: null,
      };

    case "UPDATE_NUMPAD_SELECTION":
      return {
        ...state,
        numpadNSelected: payload,
      };

    default:
      return state;
  }
};

export default reducer;
