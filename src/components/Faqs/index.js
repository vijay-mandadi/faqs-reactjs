import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(each => (
              <FaqItem key={each.id} item={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
