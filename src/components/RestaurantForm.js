import React from 'react';
import { updateRestaurantForm } from '../actions/RestaurantForm.js'
// import { createRestaurant } from '../actions/myRestaurants.js'
import { connect } from 'react-redux'

const RestaurantForm = ({ formData, updateRestaurantForm, userId, restaurant, handleSubmit, editMode }) => { 

  const { name, description } = formData 

    const handleChange = event => {
        console.log("trigger Handle change")
        const { name, value } = event.target
        updateRestaurantForm(name, value)
    }

    // const handleSubmit = event => { 
    //   event.preventDefault()
    //   createRestaurant({
    //     ...formData, 
    //     userId
    //   }, history) 
    // }

    return (
    <form onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData)
    }}>
        <input placeholder="name" name="name" onChange={handleChange} value={name}/><br/>
        <input placeholder="description" name="description" onChange={handleChange} value={description}/><br/>
        <input type="submit" value={editMode ? "Update Restaurant" : "Create Restaurant" }/>
    </form>
)};


const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.restaurantForm,
      userId
    }
  }

export default connect(mapStateToProps, { updateRestaurantForm })(RestaurantForm);





