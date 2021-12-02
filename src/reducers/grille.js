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
      return payload;
    case "LOAD":
      if (!GRILLE_START.length) return state;

      const newGrilleIndice = randomGrilleIndice(state.grilleIndice);
      const newGrille = GRILLE_START[newGrilleIndice].map((line) => [...line]);
      const newGrilleStart = GRILLE_START[newGrilleIndice].map((line) => [
        ...line,
      ]);
      return {
        ...initialState,
        grille: newGrille,
        grilleStart: newGrilleStart,
        grilleIndice: newGrilleIndice,
      };
    case "SET_N":
      console.log("\tREDUCER SET", payload);
      // const { l, c } = payload.pos;

      // // Si case de départ ou aucun chiffre de sélectionné...
      // if (!!!state.grilleStart[l][c] || !!!state.numpadNSelected) {
      //   return {
      //     ...state,
      //     cellSelected: payload.pos,
      //   };
      // }

      // const newGrille2 = state.grille.map((line) => [...line]); // Copie la grille
      // newGrille2[l][c] =
      //   state.numpadNSelected === 0 ? null : state.numpadNSelected; // Efface ou mettre le chiffre sélectionné dans la nouvelle grille
      // return {
      //   ...state,
      //   cellSelected: payload.pos,
      //   grille: newGrille2,
      //   grilleSaved: [
      //     ...state.grilleSaved,
      //     newGrille2.map((line) => [...line]),
      //   ],
      // };
      return state;
    case "RESET":
      return {
        ...state,
        grille: state.grilleStart,
        cellSelected: {},
        grilleSaved: [],
        numpadSelected: null,
      };

    default:
      return state;
  }
};

export default reducer;
