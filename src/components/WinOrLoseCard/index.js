// Write your code here.
import {Component} from 'react'

import './index.css'

const loseUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const wonUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

class WinOrLossCard extends Component {
  render() {
    const {won, replayEmojis, totalScore} = this.props
    const gameResult = won ? 'You Won' : 'You Lose'
    const scoreStatus = won ? 'Best Score' : 'Score'
    const imgUrl = won ? wonUrl : loseUrl

    return (
      <div className="win-loss-cont">
        <div className="details">
          <h1 className="game-result">{gameResult}</h1>
          <p className="score-status">{scoreStatus}</p>
          <p>
            <span className="total-score">{totalScore}</span> /12
          </p>
          <button className="replay" type="button" onClick={replayEmojis}>
            Play Again
          </button>
        </div>
        <div className="img-cont">
          <img className="image" src={imgUrl} alt="win or lose" />
        </div>
      </div>
    )
  }
}

export default WinOrLossCard
