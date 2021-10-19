const initialState = []

export default (state = [], action) => {
    switch (action.type) {
        case "SET_MY_RESTAURANTS":
            return action.restaurants
        case "CLEAR_RESTAURANTS":
            return initialState 
      default:
        return state
    }
  }