import React from 'react'
import {Link} from 'react-router-dom'

const RestaurantCard = ({ restaurant }) => {
  return (
    restaurant ?
      <div>
        <h3>{restaurant.attributes.name}</h3>
        <p>{restaurant.attributes.description}</p>
        <Link to={`/restaurants/${restaurant.id}/edit`}>Edit this restaurant</Link>
      </div> :
      <p>This the the restaurant card with no restaurant!</p>
  )
}

export default RestaurantCard