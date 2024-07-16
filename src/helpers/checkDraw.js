function IsDraw(board) {
  // Check if there are any empty spots on the board
  const isBoardFull = board.every((cell) => cell !== "");
  return isBoardFull;
}

export default IsDraw;
