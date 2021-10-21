
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_RESTAURANTS":
      return action.restaurants
    case "ADD_RESTAURANT":
      return state.concat(action.restaurant)
    case "UPDATE_RESTAURANT":
      return state.map(restaurant => restaurant.id === action.restaurant.id ? action.restaurant : restaurant)
    case "DELETE_RESTAURANT":
      return state.filter(restaurant => restaurant.id === action.restaurantId ? false : true)
    case "CLEAR_RESTAURANTS":
      return initialState
    default:
      return state
  }
}