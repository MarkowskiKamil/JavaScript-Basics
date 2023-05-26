const getRandomCoordinates = (currentCoordinates, possibleCoordinates) => {
  if (!possibleCoordinates) {
    return null
}
  let availableCoordinates = possibleCoordinates.map(
    (coordinate) => coordinate
  );

  availableCoordinates.splice(
    availableCoordinates.findIndex(
      (coordinates) =>
        coordinates.row === currentCoordinates.row &&
        coordinates.column === currentCoordinates.column
    ),
    1
  );

  let randomCoordinates =
    availableCoordinates[
      Math.floor(Math.random() * availableCoordinates.length)
    ];

  return randomCoordinates;
};

export default getRandomCoordinates;
