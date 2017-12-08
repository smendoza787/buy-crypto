import React, { Component } from 'react'
import CoinSelector from '../CoinSelector'
import CurrencyAmountInput from '../CurrencyAmountInput'
import { connect } from 'react-redux'

class CoinConverter extends Component {
  render() {
    return (
      <div className="coin-converter">
        <h2>I want to buy</h2>
        <CoinSelector />
        {/* TODO: Implement additional currencies */}
        <h2>with</h2>
        <CurrencyAmountInput />
        {/* <CurrencySelectorDropdown /> */}
        <h2>That's enough to buy you:</h2>
        <h2>{this.props.finalCoinAmount} coins!</h2>
        {/* <ComputedResults /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    finalCoinAmount: state.coin.finalCoinAmount
  }
}

export default connect(mapStateToProps)(CoinConverter)