/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {emojis: [], isFinished: false, score: 0}

  setScore = got => {
    const {score} = this.state
    if (got > score) {
      this.setState({score: got})
    }
  }

  setFinished = game => {
    this.setState({isFinished: game})
  }

  finishedGame = game => {
    this.setFinished(true)
    this.setScore(game)
  }

  replayEmojis = () => {
    this.setFinished(false)
    this.setState({emojis: []})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {emojis} = this.state
    const emojiIncludes = emojis.includes(id)
    const lengthOfEmojis = emojis.length

    if (emojiIncludes) {
      this.finishedGame(lengthOfEmojis)
    } else {
      if (emojisList.length - 1 === lengthOfEmojis) {
        this.finishedGame(emojisList.length)
      }
      this.setState(prevState => ({
        emojis: [...prevState.emojis, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojiCard = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="list-cont">
        {shuffledEmojisList.map(each => (
          <EmojiCard emoji={each} key={each.id} clickEmoji={this.clickEmoji} />
        ))}
      </ul>
    )
  }

  winScoreCard = () => {
    const {emojisList} = this.props
    const {emojis} = this.state
    const win = emojis.length === emojisList.length
    return (
      <WinOrLoseCard
        win={win}
        totalScore={emojis.length}
        replayEmojis={this.replayEmojis}
      />
    )
  }

  render() {
    const {emojis, isFinished, score} = this.state
    return (
      <div className="game-cont">
        <NavBar
          presentScore={emojis.length}
          isFinished={isFinished}
          score={score}
        />
        <div className="emoji-cont">
          {isFinished ? this.winScoreCard() : this.emojiCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
