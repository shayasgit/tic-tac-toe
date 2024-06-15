console.log("Tic Tac Toe");

function gameBoard() {
  const row = 3;
  const col = 3;
  let board = [];
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < col; j++) {
      board[i].push(null);
    }
  }
  return { board };
}

function players(playerOne = "Player 1", playerTwo = "Player 2") {
  let players = [
    {
      name: playerOne,
      token: "X",
    },
    {
      name: playerTwo,
      token: "O",
    },
  ];
  return { players };
}