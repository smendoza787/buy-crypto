import React, { Component } from 'react';
import  CoinSelector from '../CoinSelector'

class CoinConverter extends Component {
  render() {
    return (
      <div className="coin-converter">
        <h2>I want to buy</h2>
        <CoinSelector />
        <h2>with</h2>
        {/* <CurrencyAmountInput /> */}
        {/* <CurrencySelectorDropdown /> */}
        <h2>Thats enough to buy you:</h2>
        {/* <ComputedResults /> */}
      </div>
    )
  }
}

export default CoinConverter;