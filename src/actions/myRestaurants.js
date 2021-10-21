import { resetRestaurantForm} from './RestaurantForm'


export const setMyRestaurants = restaurants => {
    return {
        type: "SET_MY_RESTAURANTS",
        restaurants
    }
}

export const clearRestaurants = () => {
  return {
    type: "CLEAR_RESTAURANTS"
  }
}

export const addRestaurant = restaurant => {
  return {
    type: "ADD_RESTAURANT",
    restaurant
  }
}

export const deleteRestaurantSuccess = restaurantId => {
  return {
    type: "DELETE_RESTAURANT",
    restaurantId
  }
}

export const updateRestaurantSuccess = restaurant => {
  return {
    type: "UPDATE_RESTAURANT",
    restaurant
  }
}

export const getMyRestaurants = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/restaurants", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setMyRestaurants(response.data))
          }
        })
        .catch(console.log)
    }
  }


export const createRestaurant = (restaurantData, history) => {
  return dispatch => {
    const sendableRestaurantData = {
      name: restaurantData.name,
      description: restaurantData.description,
      user_id: restaurantData.userId
    }
    return fetch("http://localhost:3001/api/v1/restaurants", {
      credentials: "include",
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(sendableRestaurantData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(addRestaurant(resp.data))
        dispatch(resetRestaurantForm())
        history.push(`/restaurants/${resp.data.id}`)
      }
    })
    .catch(console.log)

  }
}  

export const updateRestaurant = (restaurantData, history) => {
  return dispatch => {
    const sendableRestaurantData = {
      name: restaurantData.name,
      description: restaurantData.description,
    }
    return fetch(`http://localhost:3001/api/v1/restaurants/${restaurantData.restaurantId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableRestaurantData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(updateRestaurantSuccess(resp.data))
          history.push(`/restaurants/${resp.data.id}`)
        }
      })
      .catch(console.log)
  }
}

export const deleteRestaurant = (restaurantId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/restaurants/${restaurantId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteRestaurantSuccess(restaurantId))
          history.push(`/restaurants`)
        }
      })
      .catch(console.log)
  }
}