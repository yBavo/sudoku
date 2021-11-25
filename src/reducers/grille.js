const initGrid = () => {
  const newGrid = [];
  const line = [null, null, null, null, null, null, null, null, null];

  for (let l = 0; l < 9; l++) {
    newGrid.push([...line]);
  }

  return newGrid;
};

const gridStart = [
  [5, null, 3, null, null, null, 8, null, 9],
  [null, 4, null, null, null, null, null, 3, null],
  [9, null, null, 6, 3, 8, null, null, 7],
  [null, null, 7, 4, null, 1, 5, null, null],
  [null, null, 4, null, 2, null, 7, null, null],
  [null, null, 5, 9, null, 3, 1, null, null],
  [8, null, null, 1, 9, 7, null, null, 4],
  [null, 1, null, null, null, null, null, 7, null],
  [4, null, 9, null, null, null, 2, null, 5],
];

export default (state = initGrid(), { type, payload }) => {
  console.log("REDUCER\n", state);
  switch (type) {
    case "LOAD":
      console.log("Loading grille");
      return gridStart;
    case "RESET":
      return initGrid();
    default:
      return state;
  }
};
