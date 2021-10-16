import React from 'react'
import { connect } from 'react-redux'
import RestaurantCard from './RestrauantCard.js'

const MyRestaurants = props => {
    const restaurantCards = props.restaurants.length > 0 ?
     props.restaurants.map(r => <RestaurantCard restaurant={r} key={r.id}/>) : null
    return (
        restaurantCards
    )
}


const mapStateToProps = state => {
    return {
        restaurants: state.myRestaurants
    }
}

export default connect(mapStateToProps)(MyRestaurants)