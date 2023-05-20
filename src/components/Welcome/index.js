// Write your code here
import {Component} from 'react'

import './index.css'

class welcome extends Component {
  state = {isclicked: true}

  onchange = () => {
    const {isclicked} = this.state

    if (isclicked === true) {
      this.setState({isclicked: false})
    } else {
      this.setState({isclicked: true})
    }
  }

  render() {
    const {isclicked} = this.state
    return (
      <div className="bg">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you!Happy Learning</p>
        <div>
          {isclicked ? (
            <button type="button" className="button" onClick={this.onchange}>
              Subscribe
            </button>
          ) : (
            <button type="button" className="button" onClick={this.onchange}>
              Subscribed
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default welcome
