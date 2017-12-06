import React, { Component } from 'react'
import './index.css'

class CoinSelector extends Component {
  constructor() {
    super()

    this.state = {
      coin: '',
      coinObject: {},
      coincapCoins: []
    }

    this.handleChange = this.handleChange.bind(this)
    // this.props.selectCoin = this.props.selecrCoin.bind(this)
  }

  componentWillMount() {
    fetch('https://api.coinmarketcap.com/v1/ticker/')
      .then(resp => resp.json())
      .then(coins => this.setState({ coincapCoins: coins }))

    const selectedCoin = this.state.coincapCoins.find(coin => coin.symbol === this.state.coin)
    this.setState({ coinObject: selectedCoin })
  }

  handleChange(event) {
    const selectedCoin = this.state.coincapCoins.find(coin => coin.symbol === event.target.value)
    this.setState({ 
      coin: event.target.value,
      coinObject: selectedCoin
    })
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
    console.log(this.state)
    return (
      <div className="coin-selector">
        <select value={this.state.coin} onChange={this.handleChange}>
          {this.renderCoinOptions(this.state.coincapCoins)}
        </select>
        <h2>{this.state.coinObject && this.state.coinObject.name} {this.state.coinObject && this.state.coinObject.symbol} (${this.state.coinObject && this.state.coinObject.price_usd})</h2>
      </div>
    )
  }
}

export default CoinSelector