
import React from 'react';
import RestaurantForm from './RestaurantForm'
import { createRestaurant } from '../actions/myRestaurants'
import { connect } from 'react-redux'

const NewRestaurantFormWrapper = ({ history, createRestaurant }) => {

  const handleSubmit = (formData, userId) => {
    createRestaurant({
      ...formData,
      userId
    }, history)
  }
  return  <RestaurantForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createRestaurant })(NewRestaurantFormWrapper);