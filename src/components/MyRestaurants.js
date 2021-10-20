import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

const MyRestaurants = props => {
    const restaurantCards = props.restaurants.length > 0 ?
     props.restaurants.map(r => (<p key={r.id}><Link to={`/restaurants/${r.id}`}>{r.attributes.name}</Link></p>)) : null
     
    return restaurantCards
    
}


const mapStateToProps = state => {
    return {
        restaurants: state.myRestaurants
    }
}

export default connect(mapStateToProps)(MyRestaurants)