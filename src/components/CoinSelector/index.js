import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCoins, selectCoin, setCoinName } from '../../actions/coinActions'
import './index.css'

class CoinSelector extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    // this.props.selectCoin = this.props.selectCoin.bind(this)
  }
  
  componentDidMount() {
    this.props.fetchCoins()
    const selectedCoin = this.props.fetchedCoins.find(coin => coin.symbol === 'BTC')
    // debugger
    this.props.selectCoin(selectedCoin)
  }

  handleChange(event) {
    const selectedCoin = this.props.fetchedCoins.find(coin => coin.symbol === event.target.value)
    this.props.setCoinName(selectedCoin.name)
    this.props.selectCoin(selectedCoin)
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
    return coinList.sort(this.sortCoins).map(coin => <option value={coin.symbol} key={coin.id}>{coin.name}</option>)
  }

  render() {
    console.log("props", this.props);
    return (
      <div className="coin-selector">
        <select value={this.props.selectedCoinName} onChange={this.handleChange}>
          {this.renderCoinOptions(this.props.fetchedCoins)}
        </select>
        <h2>{this.props.selectedCoin && this.props.selectedCoin.symbol} (${this.props.selectedCoin && this.props.selectedCoin.price_usd})</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    coinName: state.coin.coinName,
    selectedCoin: state.coin.selectedCoin,
    fetchedCoins: state.coin.fetchedCoins
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCoins,
    selectCoin,
    setCoinName
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinSelector)