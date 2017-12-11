import React, { Component } from 'react'
import Navbar from './components/Navbar'
import MainHeader from './components/MainHeader'
import AboutCrypto from './components/AboutCrypto'
import CoinCalculator from './components/CoinCalculator'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main-section">
          <MainHeader />
          <AboutCrypto />
          <CoinCalculator />
          {/* <BuyingOptions /> */}
        </div>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App
