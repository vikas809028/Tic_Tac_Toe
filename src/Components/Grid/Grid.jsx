import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import IsWinner from "../../helpers/checkWinner";
import IsDraw from "../../helpers/checkDraw";

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  // true => O, false => X
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  function play(index) {
    const newBoard = [...board];
    newBoard[index] = turn ? "O" : "X";

    const win = IsWinner(newBoard, turn ? "O" : "X");
    if (win) {
      setWinner(win);
    } else if (IsDraw(newBoard)) {
      setIsDraw(true);
    }

    setBoard(newBoard);
    setTurn(!turn);
  }

  function reset() {
    setTurn(true);
    setWinner(null);
    setIsDraw(false);
    setBoard(Array(numberOfCards).fill(""));
  }

  return (
    <div className="grid-container">
      {winner && (
        <>
          <h1 className="turn_highlight">Winner is {winner}</h1>
          <div className="center">
            <button className="button" onClick={reset}>
              Reset Game
            </button>
          </div>
        </>
      )}
      {isDraw && !winner && (
        <>
          <h1 className="turn_highlight">It is a Draw!</h1>
          <div className="center">
            <button className="button" onClick={reset}>
              Reset Game
            </button>
          </div>
        </>
      )}
      {!winner && !isDraw && (
        <h1 className="turn_highlight">Current Turn: {turn ? "O" : "X"}</h1>
      )}
      <br />
      <div className="grid">
        {board.map((el, idx) => (
          <Card
            gameEnd={winner || isDraw}
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
