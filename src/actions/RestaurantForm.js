export const updateRestaurantForm = (name, value) => {
    const formData = { name, value }
    return {
      type: "UPDATE_NEW_RESTAURANT_FORM",
      formData
    }
  }
  
  export const resetRestaurantForm = () => {
    return {
      type: "RESET_NEW_RESTAURANT_FORM",
    }
  }
  
  export const setFormDataForEdit = restaurant => {
    const restaurantFormData = {
      name: restaurant.attributes.name,
      description: restaurant.attributes.description,
    }
    return {
      type: "SET_FORM_DATA_FOR_EDIT",
      restaurantFormData
    }
  }