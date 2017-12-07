export function fetchCoins() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COINS' })
    return fetch('https://api.coinmarketcap.com/v1/ticker/')
      .then(resp => rsp.json())
      .then(coins => dispatch({ type: 'FETCH_COINS', payload: coins }))
  }
}