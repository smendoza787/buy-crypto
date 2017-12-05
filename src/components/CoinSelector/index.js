import React, { Component } from 'react';

class CoinSelector extends Component {
  constructor() {
    super();

    this.state = {coin: 'BTC'}

    this.handleChange = this.handleChange.bind(this)
    // this.props.selectCoin = this.props.selecrCoin.bind(this)
  }

  handleChange(event) {
    this.setState({ coin: event.target.value })
  }

  render() {
    return (
      <div className="coin-selector">
        <select value={this.state.coin} onChange={this.handleChange}>
          <option value="BTC">Bitcoin</option>
          <option value="LTC">Litecoin</option>
        </select>
        <h2>{this.state.coin}</h2>
      </div>
    )
  }
}

export default CoinSelector;