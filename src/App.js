import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  //Set state for gameboard, when game has not started
  const [squares, setSquares] = useState(Array(9).fill(null))
  //Set state for player 1(X) to go first
  const [player, setPlayer] = useState("👽")
  //Set state to hold winner 
  const [winner, setWinner] = useState(null)  

  //function to handle all gameplay logic
  const handleGamePlay = (index) => {
    //copying gameboard into a variable to do logic with
    let updateGrid = [...squares]
    //Checking if the square is filled or there is a winner. If either condition true, return null, meaning game can no longer be played. 
    if(squares[index] || setWinner(winner)){
      return null
    }
    //Update the player with the first box clicked (X always goes first)
    updateGrid[index] = player
  //Set win conditions, use array with sub-arrays inside for each condition(horizontal, vertial, diagonal)
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
      //Setting the gameboard up
      setSquares(updateGrid)
      //For loop to determine winner
      for (let i = 0; i < winConditions.length; i++){
        //Storing the box selections each player chooses into an array
        const [a, b, c] = winConditions[i]
        //Checking if each index is the same in a winning condition order(horizontal, vertical, diagonal)
        if(updateGrid[a] && updateGrid[a] === updateGrid[b] && updateGrid[a] === updateGrid[c]){
          //Setting usestate to the winner
          setWinner(winner)
          //Alert box to show winner of game
          return alert(`${player} has won the game!`)
        } 
        // return null
      }
    //Changing player in between clicks on the board
    setPlayer(player === "👽" ? "👾" : "👽")
 }

 const restartGame = () => {
      setWinner()
      setSquares(Array(9).fill(null))
 }
 
//  let showWinner
//  if(winner){
//   showWinner = "Winner: " + winner
//  }else{
//   showWinner = "Next player: " + (player ? "❌" : "⭕️")
//  }


  return (
    <>
      <h1>Aliens 👽 and Monsters 👾</h1>
      <h1>Tic Tac Toe</h1>
      <p>Who is better? Play and find out!</p>
      {/* <p>{showWinner}</p> */}
      {/* <p>Winner: {winner}</p> */}
      <p><button onClick={restartGame}>Restart Game</button></p>
      <div className="grid">
        {squares.map((value, index) => {
          return (
            <Square 
              value={value}
              key={index}
              index={index}
              handleGamePlay={handleGamePlay}
            />
          )
        })}
      </div>
    </>
  )
}

export default App