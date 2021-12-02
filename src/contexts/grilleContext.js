import React, { useState, useReducer } from "react";
import { initGrid } from "../reducers/grille";
import reducer, { initialState } from "../reducers/grille";

const GrilleContext = React.createContext();

export const GrilleProvider = ({ children }) => {
  const [cellSelected, setCellSelected] = useState({});
  const [grille, setGrille] = useState(initGrid());
  const [grilleSaved, setGrilleSaved] = useState([]);
  const [grilleStart, setGrilleStart] = useState(null);
  const [numpadNSelected, setNumpadNSelected] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Fonction qui annule le dernier numéro entré
   */
  const annuler = () => {
    grilleSaved.pop(); // Efface la dernière grille de sauvegarde

    let newGrille = [];
    // S'il y a une grille de sauvegarde
    grilleSaved.length
      ? // Si oui.. Copie la grille de sauvegarde
        (newGrille = grilleSaved[grilleSaved.length - 1].map((line) => [
          ...line,
        ]))
      : // Sinon... Copie la grille de départ
        (newGrille = grilleStart.map((line) => [...line]));

    setCellSelected({}); // Aucune cellule de sélectionné
    setGrille(newGrille); // Set la nouvelle grille
  };

  const load = () =>
    dispatch({
      type: "LOAD",
    });

  const reset = () => {
    setCellSelected({});
    setGrille(grilleStart);
    setGrilleSaved([]);
    setNumpadNSelected(null);
  };

  const saveGrille = (newGrille) => {
    const grilleCopie = grilleSaved.map((line) => [...line]);
    grilleCopie.push(newGrille.map((line) => [...line]));
    setGrilleSaved(grilleCopie);
  };

  /**
   * Affecte la grille avec le chiffre sélectionné
   * @param {position {ligne, colonne}} pos
   */
  const setGrilleN = (pos) => {
    const { l, c } = pos;
    // Affecte la cellule sélectionnée
    setCellSelected(pos);

    // Si la case sélectionné n'est pas une case de départ...
    if (grilleStart[l][c] === null) {
      const newGrille = grille.map((line) => [...line]); // Copie la grille
      newGrille[l][c] = numpadNSelected === 0 ? null : numpadNSelected; // Efface ou mettre le chiffre sélectionné dans la nouvelle grille

      setGrille(newGrille); // Efface ou mettre le chiffre sélectionné dans la grille
      saveGrille(newGrille); // Sauvegarder grille
      validate(newGrille[l][c], pos); // Valider la grille
    }
  };

  const updateGrille = (pos) => {
    if (pos === {}) return;
    return dispatch({
      type: "SET_N",
      payload: pos,
    });
  };

  const useBlock = (pos) => {
    return Math.floor(pos.l / 3) * 3 + Math.floor(pos.c / 3);
  };

  //const useGrilleStart = () => GRILLE_START[1];

  const validate = (n, pos) => {};

  return (
    <GrilleContext.Provider
      value={{
        annuler,
        cellSelected, //
        grille,
        grilleSaved,
        grilleStart,
        load, //
        numpadNSelected,
        reset, //
        setGrilleN, //
        setGrilleStart,
        setNumpadNSelected,
        updateGrille,
        useBlock, //
        state,
        dispatch,
      }}
    >
      {children}
    </GrilleContext.Provider>
  );
};

export default GrilleContext;
