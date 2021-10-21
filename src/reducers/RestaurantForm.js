
const initialState = {
    name: "",
    description: "",
  }
  
  export default (state=initialState, action) => {
    switch (action.type) {
      case "UPDATE_NEW_RESTAURANT_FORM":          
      const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value
      }
      return returnVal
      case "RESET_NEW_RESTAURANT_FORM":
        return initialState
      case "SET_FORM_DATA_FOR_EDIT":
        return action.restaurantFormData
      default:
        return state    
    }
  }