import React from 'react'
import {useState, useEffect} from 'react'

const RenderSquare = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.val}
    </button>
  )
}

const Board = () => {
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
        if (winner){
          status = 'Winner: ' + winner;
          setDisable(true)
        } 

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

    function swapTurns(i, val, disable) {
      if (val !== "X" && val !== "O" && disable === false){
          setPlayer(prevPlayer => {
              setSquares(prevSquares => {
                  prevSquares[i] = prevPlayer
                  return prevSquares
              });

              return (prevPlayer === "X" ? "O" : "X")
          })
      }
    }

    return (
        <>
        <h1 className="font-weight-normal">{status}</h1>
          <div className="game-board">
            {squares.map((val, ind) => (
              <RenderSquare val={val} onClick={() => swapTurns(ind, val, disable)}></RenderSquare>
            ))}
          </div>
          <div className="restart-wrapper">
            <a className="btn btn-default btn-lg" onClick={restartClicked}>Restart</a>
          </div>
        </>
      )
}

const TicTacToe = () => {
    
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