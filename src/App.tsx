import React, { useEffect, useState } from "react";
import {
  EMPTY,
  X,
  O,
  BoardValue,
  index,
  player,
  won,
  optimalMove,
} from "./helper";
import "./App.css";

const messages = [
  "Make a move !",
  "Computer Thinking !",
  "X Won !!",
  "O Won !!",
  "It was a Draw !!",
];

function App() {
  // prettier-ignore
  const [board, setBoard] = useState<BoardValue[]>([
    EMPTY,  EMPTY,  EMPTY,
    EMPTY,  EMPTY,  EMPTY,
    EMPTY,  EMPTY,  EMPTY,
  ]);

  const [msg, setMsg] = useState(0);
  const [terminate, setTerminate] = useState(false);

  /**
   * If match is not terminated
   * make a move at the cell clicked by user (if cell is empty)
   * and trigger ai move
   * @param event mouse click event
   */
  const handleClick = (event: React.MouseEvent) => {
    if (!terminate) {
      let i = index[(event.target as Element).className];

      if (board[i] === EMPTY) {
        
        // Make user move
        board[i] = player(board);
        setMsg(1);
        setBoard([...board]);
      }
    }
  };

  /**
   * Chek if a player won or game is draw
   *
   * if so terminate the game and show appropriate msg
   *
   * if not terminated then make ai move
   */
  useEffect(() => {
    var winner = won(board);

    if (winner !== null) {
      setTerminate(true);

      if (winner === 1) {
        setMsg(2);
      } else if (winner === -1) {
        setMsg(3);
      } else if (winner === 0) {
        setMsg(4);
      }
    }
  }, [board, terminate, msg]);

  useEffect(() => {

    // Make Ai Move
    if (!terminate && msg === 1) {
      let opt = optimalMove(board);

      console.log(opt);

      board[opt] = O;
      setMsg(0);
      setBoard([...board]);
    }

  }, [terminate, msg, board]);

  return (
    <div className="App">
      <header className="">
        <h1 className="text-white text-center">Tic-Tac-Toe</h1>
      </header>

      <main>
        <div className="alert text-white text-center" role="alert">
          {messages[msg]}
        </div>

        <div className="board p-3">
          <table className="text-light text-center">
            <tbody>
              <tr>
                <td className="top-left" onClick={handleClick}>
                  {board[0]}
                </td>
                <td className="top-center" onClick={handleClick}>
                  {board[1]}
                </td>
                <td className="top-right" onClick={handleClick}>
                  {board[2]}
                </td>
              </tr>
              <tr>
                <td className="middle-left" onClick={handleClick}>
                  {board[3]}
                </td>
                <td className="middle-center" onClick={handleClick}>
                  {board[4]}
                </td>
                <td className="middle-right" onClick={handleClick}>
                  {board[5]}
                </td>
              </tr>
              <tr>
                <td className="bottom-left" onClick={handleClick}>
                  {board[6]}
                </td>
                <td className="bottom-center" onClick={handleClick}>
                  {board[7]}
                </td>
                <td className="bottom-right" onClick={handleClick}>
                  {board[8]}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
