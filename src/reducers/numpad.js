/* eslint-disable import/no-anonymous-default-export */
export const INIT_NUMPAD = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

const toggleTouche = (state, touche) => {
  let newPad = [...INIT_NUMPAD];
  newPad[touche] = !newPad[touche];
  return newPad;
};

export default (state = INIT_NUMPAD, { type, touche }) => {
  switch (type) {
    case "ACTIVE_TOGGLE":
      console.log("PAD REDUCER > ACTIVE_TOGGLE", touche);
      return toggleTouche(touche - 1);
    case "GET_NUMPAD":
      return state;
    default:
      return state;
  }
};
