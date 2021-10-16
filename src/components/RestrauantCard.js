import React from 'react'
// import {Link} from 'react-router-dom'

const RestaurantCard = ({ restaurant }) => {
  return (
    <p>{restaurant.attributes.name}</p>
  )
}

export default RestaurantCard