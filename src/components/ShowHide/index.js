import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  toggleFirstName = () => {
    this.setState(prevState => ({
      showFirstName: !prevState.showFirstName,
    }))
  }

  toggleLastName = () => {
    this.setState(prevState => ({
      showLastName: !prevState.showLastName,
    }))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div className="btn-container">
            <div className="btn-box">
              <button className="btn" onClick={this.toggleFirstName}>
                Show/Hide Firstname
              </button>
              {showFirstName && <p className="name">Joe</p>}
            </div>
            <div className="btn-box">
              <button className="btn" onClick={this.toggleLastName}>
                Show/Hide Lastname
              </button>
              {showLastName && <p className="name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
