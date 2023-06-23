import {Component} from 'react'

import './index.css'

class passwordManager extends Component {
  render() {
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="main-image"
        />
        <div className="password-upper-container">
          <div className="text-container">
            <h1 className="heading">Add New Password</h1>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-img"
          />
        </div>
      </div>
    )
  }
}

export default passwordManager
