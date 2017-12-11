import React, { Component } from 'react'
import './index.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          {/* INSERT LOGO */}
        </div>
        <div className="links">
          <a href="#">About Crypto</a>
          <a href="#">Crypto Calculator</a>
          <a href="#">How To Buy</a>
        </div>
      </div>
    )
  }
}

export default Navbar