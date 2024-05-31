import React, { useEffect, useState } from "react";
import "./style.css";
import { TbLetterX } from "react-icons/tb";
import { FaRegCircle } from "react-icons/fa";

const Square = ({ value, handleSquareClick }) => {
  return (
    <button className="square" onClick={handleSquareClick}>
      {(value === "O" && <FaRegCircle size={50} color="white" />) ||
        (value === "X" && <TbLetterX size={50} color="white" />)}
    </button>
  );
};

function TikTakToy() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isCircle, setIsCircle] = useState(false);
  const [status, setStatus] = useState("status");

  const getWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  };

  const handleSquareClick = (squareIndex) => {
    const squaresCopy = [...squares];
    if (squaresCopy[squareIndex] || getWinner(squaresCopy)) {
      return;
    }
    squaresCopy[squareIndex] = isCircle ? "O" : "X";
    setSquares(squaresCopy);
    setIsCircle(!isCircle);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(""));
    setIsCircle(false);
  };

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is a draw! Restart the game.");
    } else if (getWinner(squares)) {
      setStatus(
        `The winner is ${getWinner(squares)}! please restart the game.`
      );
    } else {
      setStatus(isCircle ? "next player is O" : "next player is X");
    }
  }, [squares, isCircle]);

  return (
    <div className="ticTacToeContenair">
      <div className="ticTacToyRow">
        <Square
          value={squares[0]}
          handleSquareClick={() => handleSquareClick(0)}
        />
        <Square
          value={squares[1]}
          handleSquareClick={() => handleSquareClick(1)}
        />
        <Square
          value={squares[2]}
          handleSquareClick={() => handleSquareClick(2)}
        />
      </div>
      <div className="ticTacToyRow">
        <Square
          value={squares[3]}
          handleSquareClick={() => handleSquareClick(3)}
        />
        <Square
          value={squares[4]}
          handleSquareClick={() => handleSquareClick(4)}
        />
        <Square
          value={squares[5]}
          handleSquareClick={() => handleSquareClick(5)}
        />
      </div>
      <div className="ticTacToyRow">
        <Square
          value={squares[6]}
          handleSquareClick={() => handleSquareClick(6)}
        />
        <Square
          value={squares[7]}
          handleSquareClick={() => handleSquareClick(7)}
        />
        <Square
          value={squares[8]}
          handleSquareClick={() => handleSquareClick(8)}
        />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart} className="restartBtn">
        Restart
      </button>
    </div>
  );
}

export default TikTakToy;
