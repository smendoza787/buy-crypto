export default (state = {
  coinName: '',
  selectedCoin: {},
  fetchedCoins: [],
  usdPurchaseAmount: 0,
  finalCoinAmount: 0
}, action) => {
  switch (action.type) {
    case 'FETCH_COINS':
      return Object.assign({}, state, { fetchedCoins: action.payload })
    case 'SELECT_COIN':
      return Object.assign({}, state, { selectedCoin: action.payload })
    case 'SET_COIN_NAME':
      return Object.assign({}, state, { coinName: action.payload })
    case 'CHANGE_USD_AMOUNT':
      return Object.assign({}, state, { usdPurchaseAmount: (action.payload) })
    case 'CHANGE_FINAL_COIN_AMOUNT':
      return Object.assign({}, state, { finalCoinAmount: action.payload })
    default:
      return state
  }
}