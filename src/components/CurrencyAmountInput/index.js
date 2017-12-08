import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeUsdAmount, changeFinalCoinAmount } from '../../actions/coinActions'

class CurrencyAmountInput extends Component {
  constructor() {
    super()

    this.state = { value: '' }

    this.handleOnChange = this.handleOnChange.bind(this)
  }
  
  handleOnChange(event) {
    this.props.changeUsdAmount(parseInt(event.target.value))
    this.props.changeFinalCoinAmount(event.target.value, this.props.selectedCoin.price_usd)
    this.setState({ value: event.target.value})
  }
  
  render() {
    return (
      <div>
        $<input type="text" value={this.state.value} onChange={this.handleOnChange} />
        {/* Using && or else NaN will display */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCoin: state.coin.selectedCoin,
    usdPurchaseAmount: state.coin.usdPurchaseAmount,
    finalCoinAmount: state.coin.finalCoinAmount
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeUsdAmount,
    changeFinalCoinAmount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyAmountInput)