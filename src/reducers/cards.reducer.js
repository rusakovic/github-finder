const cardsReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_CARDS':
      return action.cards
    case 'ADD_CARD':
      return [
        ...state,
        action.card 
      ]
    case 'REMOVE_CARD':
      return state.filter((card) => card.id !== action.id)
    default:
      return state
  }
}

export { cardsReducer as default }