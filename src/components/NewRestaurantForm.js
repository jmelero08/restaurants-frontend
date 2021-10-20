import React from 'react';
import { updateNewRestaurantForm } from '../actions/newRestaurantForm.js'
import { createRestaurant } from '../actions/myRestaurants.js'
import { connect } from 'react-redux'

const NewRestaurantForm = ({ formData, updateNewRestaurantForm, createRestaurant, userId }) => { 

  const { name, description } = formData 

    const handleChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        updateNewRestaurantForm(name, value)
    }

    const handleSubmit = event => { 
      event.preventDefault()
      createRestaurant({
        ...formData, 
        userId
      }) 
    }

    return (
    <form onSubmit={handleSubmit}>
        <input placeholder="name" name="name" onChange={handleChange} value={name}/><br/>
        <input placeholder="description" name="description" onChange={handleChange} value={description}/><br/>
        <input type="submit" value="Create Restaurant"/>
    </form>
)};


const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.newRestaurantForm,
      userId
    }
  }

export default connect(mapStateToProps, { updateNewRestaurantForm, createRestaurant })(NewRestaurantForm);





