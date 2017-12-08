import fetch from 'isomorphic-fetch'

export function fetchCoins() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COINS' })
    return fetch('https://api.coinmarketcap.com/v1/ticker/')
      .then(resp => resp.json())
      .then(coins => dispatch({ type: 'FETCH_COINS', payload: coins }))
  }
}

export function selectCoin(coin) {
  return (dispatch) => {
    dispatch({ type: 'SELECT_COIN', payload: coin })
  }
}

export function setCoinName(coinName) {
  return (dispatch) => {
    dispatch({ type: 'SET_COIN_NAME', payload: coinName })
  }
}

export function changeUsdAmount(usdAmount) {
  return (dispatch) => {
    dispatch({ type: 'CHANGE_USD_AMOUNT', payload: usdAmount })
  }
}

export function changeFinalCoinAmount(usdAmount, coinPrice) {
  return (dispatch) => {
    const finalCoinAmount = usdAmount / coinPrice
    dispatch({ type: 'CHANGE_FINAL_COIN_AMOUNT', payload: finalCoinAmount })
  }
}