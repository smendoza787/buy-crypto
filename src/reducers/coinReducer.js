export default (state = { coinName: '', selectedCoin: {}, fetchedCoins: [] }, action) => {
  switch (action.type) {
    case 'FETCH_COINS':
      return Object.assign({}, state, { fetchedCoins: action.payload })
    case 'SELECT_COIN':
      return Object.assign({}, state, { selectedCoin: action.payload })
    case 'SET_COIN_NAME':
      return Object.assign({}, state, { coinName: action.payload })
    default:
      return state
  }
}