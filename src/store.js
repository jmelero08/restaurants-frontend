import { createStore, applyMiddleware, compose, combineReducers }  from 'redux'
import thunk  from 'redux-thunk'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import myRestaurants from './reducers/myRestaurants.js'
import signupForm from './reducers/signupForm.js'
import restaurantForm from './reducers/RestaurantForm.js'

const reducer = combineReducers({
    currentUser,
    loginForm,
    myRestaurants,
    signupForm,
    restaurantForm
  })
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store