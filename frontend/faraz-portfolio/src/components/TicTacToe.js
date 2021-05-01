import React from 'react'
import {useState, useEffect} from 'react'

function RenderSquare(i, squares, setSquares, setPlayer, disable) {
    const [spot, setSpot] = useState(() => {
        return null
    })

    function swapTurns() {
        if (spot !== "X" && spot !== "O" && disable === false){
            setPlayer(prevPlayer => {
                setSpot(prevPlayer)
                setSquares(prevSquares => {
                    prevSquares[i] = prevPlayer
                    return prevSquares
                });

                return (prevPlayer === "X" ? "O" : "X")
            });
        }
    }

    useEffect(() => {
        // manually deep compare here before updating state
        if(squares[i] === null && spot != null) setSpot(null)
     },[squares])

    return (
        <button className="square" onClick={swapTurns}>
          {spot}
        </button>
    );
}

function Board() {
    const [player, setPlayer] = useState("X")

    const [squares, setSquares] = useState(() => {
        return Array(9).fill(null)
    })

    const [disable, setDisable] = useState(() => {
        return false
    })

    const winner = calculateWinner(squares);
    let status;
    useEffect(() => {
        if (winner) setDisable(true)
      }, [winner]);

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + player;
    }

    function restartClicked() {
        setDisable(false)
        setSquares(Array(9).fill(null))
        setPlayer("X")
    }


    console.log(squares[0] == null ? "null" : squares[0])

    return (
        <>
        <h1>{status}</h1>
        <div className="game-board">
        {RenderSquare(0, squares, setSquares, setPlayer, disable)}
        {RenderSquare(1, squares, setSquares, setPlayer, disable)}
        {RenderSquare(2, squares, setSquares, setPlayer, disable)}
        {RenderSquare(3, squares, setSquares, setPlayer, disable)}
        {RenderSquare(4, squares, setSquares, setPlayer, disable)}
        {RenderSquare(5, squares, setSquares, setPlayer, disable)}
        {RenderSquare(6, squares, setSquares, setPlayer, disable)}
        {RenderSquare(7, squares, setSquares, setPlayer, disable)}
        {RenderSquare(8, squares, setSquares, setPlayer, disable)}
        </div>
        <div className="restart-wrapper">
        <button className="restart-game" onClick={restartClicked}>Restart</button>
        </div>
        </>
      );
}

function TicTacToe() {
    
    return (
        <div className="game">
            <Board />
        </div>
      );
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return squares.includes(null) ?  null : "Tie!"
  }

export default TicTacToe;