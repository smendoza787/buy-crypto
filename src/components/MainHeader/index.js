import React from 'react';
import logo from '../../images/crypto-logo.png'
import './index.css'

const MainHeader = () => (
  <div className="main-header">
    <img src={logo} alt="bit-logo" width="300" height="300" />
    <h1>Crypto 101</h1>
  </div>
);

export default MainHeader;