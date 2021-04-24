// Write your code here.
import {Component} from 'react'

import './index.css'

class EmojiCard extends Component {
  render() {
    const {emoji, clickEmoji} = this.props
    const {id, emojiName, emojiUrl} = emoji
    const clickEmojiCard = () => clickEmoji(id)

    return (
      <li className="emoji-list" onClick={clickEmojiCard}>
        <img className="icon" src={emojiUrl} alt={emojiName} />
      </li>
    )
  }
}

export default EmojiCard
