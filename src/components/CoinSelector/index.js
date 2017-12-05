import React, { Component } from 'react';

class CoinSelector extends Component {
  constructor() {
    super();

    this.state = {
      coin: 'BTC',
      coincapCoins: []
    }

    this.handleChange = this.handleChange.bind(this)
    // this.props.selectCoin = this.props.selecrCoin.bind(this)
  }

  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v1/ticker/')
      .then(resp => resp.json())
      .then(coins => this.setState({ coincapCoins: coins })
      )
  }

  handleChange(event) {
    this.setState({ coin: event.target.value })
  }

  sortCoins(coinA, coinB) {
    if (coinA.name < coinB.name) {
      return -1;
    } else if (coinA.name > coinB.name) {
      return 1;
    } else {
      return 0;
    }
  }

  renderCoins(coinList) {
    return coinList.sort(this.sortCoins).map(coin => <option value={coin.symbol}>{coin.name} (${coin.price_usd})</option>)
  }

  render() {
    return (
      <div className="coin-selector">
        <select value={this.state.coin} onChange={this.handleChange}>
          {this.renderCoins(this.state.coincapCoins)}
        </select>
        <h2>{this.state.coin}</h2>
      </div>
    )
  }
}

export default CoinSelector;