import React, { useState } from 'react';
import './App.css';

/**
 * Syntax to define function:
 * (a: number) => {
 *    setButton(button +1)
 * }
 * 
 * function increment(a: number) { 
 *  setButton(button + a)
 * 
 * }
 * @returns 
 */
function App() {
  type Player = "X" | "O" | null;
  type BoardState = Player[];

  const [board, setBoard] = useState<BoardState>(Array(9).fill(null))
  const [player, setPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player>(null);

  const handleClick = (index : number) => {
    if(board[index] || winner)
      return;
    const newBoard = [...board];
    newBoard[index] = player; 

    setBoard(newBoard);
    checkWinner(newBoard);
    setPlayer(player === "X" ? "O" : "X");
  }

  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const checkWinner = (board: BoardState) => {
    const winnerFound = winningCombination.find(([a, b, c]) =>
      board[a] && board[a] === board[b] && board[a] === board[c]
    );
    if (winnerFound) {
      setWinner(board[winnerFound[0]]);
    } else if (!board.includes(null)) {
      setWinner("Draw" as Player);
    }  
  }
  
  return (
    <div className="board">
        {board.map((value, index) => (
            <button key={index} onClick={() => handleClick(index)}>
                {value}
            </button>
        ))}
      {winner && <div>Winner: {winner}</div>}
    </div>
);
}


export default App;
