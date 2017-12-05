import React, { Component } from 'react';
import MainHeader from './components/MainHeader'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <div className="main-section">
          <MainHeader />
          {/* <CoinConverter /> */}
          {/* <BuyingOptions /> */}
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
