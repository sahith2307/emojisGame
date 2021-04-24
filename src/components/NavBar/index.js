// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  scoreContainer = () => {
    const {presentScore, isFinished, score} = this.props
    if (isFinished) {
      return null
    }
    return (
      <div className="score-cont">
        <p className="score-status">
          Score: <span>{presentScore}</span>
        </p>
        <p className="score-status">
          Top Score: <span>{score}</span>
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="nav-cont">
        <div className="title-cont">
          <div className="logo-cont">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="Emoji Logo"
            />
            <h1 className="title">Emoji Game</h1>
          </div>
          {this.scoreContainer()}
        </div>
      </div>
    )
  }
}

export default NavBar
