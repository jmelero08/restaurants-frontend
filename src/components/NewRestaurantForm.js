import React from 'react';
import { updateNewRestaurantForm } from '../actions/newRestaurantForm.js'
import { connect } from 'react-redux'

const NewRestaurantForm = ({ name, description, history }) => { 

    const handleChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        updateNewRestaurantForm(name, value)
    }

    const handleSubmit = event => event.preventDefault()

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

export default connect(mapStateToProps, { updateNewRestaurantForm })(NewRestaurantForm);





