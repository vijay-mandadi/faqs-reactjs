// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isClicked: false}

  changeButton = () => {
    this.setState(prev => ({isClicked: !prev.isClicked}))
  }

  renderAnswer = () => {
    const {item} = this.props
    const {answerText} = item
    return (
      <>
        <hr />
        <p className="answer">{answerText}</p>
      </>
    )
  }

  render() {
    const {isClicked} = this.state
    const {item} = this.props
    const {questionText} = item

    const clicked = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isClicked ? 'minus' : 'plus'

    return (
      <li className="listitem">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" onClick={this.changeButton}>
            <img src={clicked} alt={altText} />
          </button>
        </div>
        {isClicked && this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
