import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="">
        <h1 className="text-white text-center">Tic-Tac-Toe</h1>
      </header>

      <main>
        <div className="alert text-white text-center" role="alert">
          Computer Thinking !!
        </div>

        <div className="board p-3">
          <table className="text-light text-center">
            <tr>
              <td className="top-left">-</td>
              <td className="top-center">-</td>
              <td className="top-right">-</td>
            </tr>
            <tr>
              <td className="middle-left">-</td>
              <td className="middle-center">-</td>
              <td className="middle-right">-</td>
            </tr>
            <tr>
              <td className="bottom-left">-</td>
              <td className="bottom-center">-</td>
              <td className="bottom-right">-</td>
            </tr>
          </table>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
