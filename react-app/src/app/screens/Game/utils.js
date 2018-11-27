export function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  let winner = null;

  lines.forEach(line => {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return (winner = squares[a]);
  });
  return winner;
}

export const getSquares = state => {
  const current = state.game.history[state.game.stepNumber];
  return current.squares;
};
