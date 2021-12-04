import { GRILLE_START } from "../data";

export const randomGrilleIndice = (grilleIndice) => {
  let randGrille;
  // Choose a different Random grille
  do {
    randGrille = Math.floor(Math.random() * GRILLE_START.length);
  } while (grilleIndice === randGrille);

  return randGrille;
};
