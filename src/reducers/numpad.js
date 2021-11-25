export default (state = null, { type, touche }) => {
  switch (type) {
    case "setTouche":
      return touche;

    default:
      return state;
  }
};
