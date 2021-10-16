export const setMyRestaurants = restaurants => {
    return {
        type: "SET_MY_RESTAURANTS",
        restaurants
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