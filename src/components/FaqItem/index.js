import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {eachFaq} = this.props
    const {answerText} = eachFaq
    return (
      <div>
        <hr />
        <p className="answer-text">{answerText}</p>
      </div>
    )
  }

  onToggleAnswer = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {eachFaq} = this.props
    const {questionText} = eachFaq
    const {isActive} = this.state
    const image = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="faq-item">
        <div className="question-plus-icon-container">
          <h1 className="question-text">{questionText}</h1>
          <button type="button" onClick={this.onToggleAnswer}>
            <img src={image} alt={altText} className="plus-icon" />
          </button>
        </div>
        {isActive && this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
