import React, { Component } from 'react'
import Navbar from './components/Navbar'
import MainHeader from './components/MainHeader'
import CoinConverter from './components/CoinConverter'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main-section">
          <MainHeader />
          <CoinConverter />
          {/* <BuyingOptions /> */}
        </div>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App
