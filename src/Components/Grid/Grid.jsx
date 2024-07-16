import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import IsWinner from "../../helpers/checkWinner";

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true); // true => O flase => X
  const [winner, setwinner] = useState(null);

  function play(index) {
    if (turn == true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }
    const win = IsWinner(board, turn ? "O" : "X");
    if (win) {
      setwinner(win);
    }
    setBoard([...board]);
    setTurn(!turn);
  }
  function reset() {
    setTurn(true);
    setwinner(null);
    setBoard(Array(numberOfCards).fill(""));
  }

  return (
    <div className="grid-container">
      {
        // this is logical and if winner is false it will return from here and if winner is true
        // it will print the follwing code
        winner && (
          <>
            <h1 className="turn_highlight">Winner is {winner}</h1>
            <button onClick={reset}>Reset Game</button>
          </>
        )
      }
      <h1 className="turn_highlight">Current Turn : {turn ? "O" : "X"}</h1>
      <br />
      <div className="grid">
        {board.map((el, idx) => (
          <Card
            gameEnd={winner ? true : false}
            key={idx}
            onPlay={play}
            player={el}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}
export default Grid;
