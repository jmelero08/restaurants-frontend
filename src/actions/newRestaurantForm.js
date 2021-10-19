export const updateNewRestaurantForm = (name, value) => {
    const formData = { name, value }
    return {
      type: "UPDATE_NEW_RESTAURANT_FORM",
      formData: { name, value }
    }
  }
  
  export const resetRestaurantForm = () => {
    return {
      type: "RESET_NEW_RESTAURANT_FORM",
    }
  }
  
//   export const setFormDataForEdit = trip => {
//     const tripFormData = {
//       name: trip.attributes.name,
//       startDate: trip.attributes.start_date,
//       endDate: trip.attributes.end_date
//     }
//     return {
//       type: "SET_FORM_DATA_FOR_EDIT",
//       tripFormData
//     }
//   }