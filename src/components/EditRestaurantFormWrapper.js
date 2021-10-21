import React from 'react';
import RestaurantForm from './RestaurantForm'
import { updateRestaurant, deleteRestaurant } from '../actions/myRestaurants'
import { setFormDataForEdit, resetRestaurantForm } from '../actions/RestaurantForm'
import { connect } from 'react-redux'

class EditRestaurantFormWrapper extends React.Component {
  componentDidMount(){
    this.props.restaurant && this.props.setFormDataForEdit(this.props.restaurant)
  }

  componentDidUpdate(prevProps) {
    this.props.restaurant && !prevProps.restaurant && this.props.setFormDataForEdit(this.props.restaurant)
  }

  componentWillUnmount() {
    this.props.resetRestaurantForm()
  }

  handleSubmit = (formData) => {
    const { updateRestaurant, restaurant, history } = this.props
    updateRestaurant({
      ...formData,
      restaurantId: restaurant.id
    }, history)
  }

  render() {
    const { history, deleteRestaurant, restaurant } = this.props
    const restaurantId = restaurant ? restaurant.id : null
    return  <>
              <RestaurantForm editMode handleSubmit={this.handleSubmit} />
              <br/>
              <button style={{color: "red"}} onClick={()=>deleteRestaurant(restaurantId, history)}>Delete this Restaurant</button>
            </>
  }
};

export default connect(null, { updateRestaurant, setFormDataForEdit, resetRestaurantForm, deleteRestaurant })(EditRestaurantFormWrapper);