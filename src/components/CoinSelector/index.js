import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCoins, selectCoin, setCoinName, changeFinalCoinAmount } from '../../actions/coinActions'
import './index.css'

class CoinSelector extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
  }
  
  componentDidMount() {
    this.props.fetchCoins()
    const selectedCoin = this.props.fetchedCoins.find(coin => coin.symbol === 'BTC')
    this.props.selectCoin(selectedCoin)
  }

  handleChange(event) {
    // safety check for the default 'select a coin' value ('null')
    if (event.target.value !== 'null') {
      const selectedCoin = this.props.fetchedCoins.find(coin => coin.symbol === event.target.value)
      this.props.setCoinName(selectedCoin.name)
      this.props.selectCoin(selectedCoin)
      this.props.changeFinalCoinAmount(this.props.usdPurchaseAmount, selectedCoin.price_usd)
    }
  }

  sortCoins(a, b) {
    if (a.name < b.name) {
      return -1
    } else if (a.name > b.name) {
      return 1
    } else {
      return 0
    }
  }

  renderCoinOptions(coinList) {
    return coinList.sort(this.sortCoins).map(coin => <option value={coin.symbol} key={coin.id}>{coin.name} ({coin.symbol})</option>)
  }

  render() {
    console.log(this.props.selectedCoin);
    return (
      <div className="coin-selector">
        <select value={this.props.selectedCoinName} onChange={this.handleChange}>
          <option selected={true} value="null">Select a coin!</option>
          {this.renderCoinOptions(this.props.fetchedCoins)}
        </select>
        {/* CONSIDER CREATING A CoinDetails COMPONENT? */}
        <h2>{this.props.selectedCoin && 'Current Price: '} {this.props.selectedCoin && `$${this.props.selectedCoin.price_usd}`}</h2>
        <h2>{this.props.selectedCoin && 'Current Market Cap: '} {this.props.selectedCoin && `$${this.props.selectedCoin.market_cap_usd}`}</h2>
        <h2>{this.props.selectedCoin && '24hr % Change: '} {this.props.selectedCoin && `${this.props.selectedCoin.percent_change_24h}%`}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    coinName: state.coin.coinName,
    selectedCoin: state.coin.selectedCoin,
    fetchedCoins: state.coin.fetchedCoins,
    usdPurchaseAmount: state.coin.usdPurchaseAmount
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCoins,
    selectCoin,
    setCoinName,
    changeFinalCoinAmount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinSelector)