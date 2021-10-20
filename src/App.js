import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from "./components/NavBar.js"
import Home from "./components/Home.js"
import Login from './components/Login.js'
import Signup from './components/SignUp.js'
import MyRestaurants from './components/MyRestaurants.js'
import NewRestaurantForm from './components/NewRestaurantForm.js'
// import MainContainer from "./components/MainContainer.js"
import { Route, Switch, withRouter, Link } from 'react-router-dom'
import RestaurantCard from './components/RestrauantCard';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn, restaurants } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar/> : <Home/> } 
        <Switch>
          {/* <Route exact path='/' render={()=> loggedIn ? <MyRestaurants/> : <Home/>}/> */}
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/restaurants' component={MyRestaurants}/>
          <Route exact path='/restaurants/new' component={NewRestaurantForm}/>
          <Route exact path='/restaurants/:id' render={props => {
            const restaurant = restaurants.find(restaurant => restaurant.id === props.match.params.id)
            console.log(restaurant)
            return <RestaurantCard restaurant={restaurant} {...props}/>
            }
          }/>
          <Route exact path='/restaurants/:id/edit' render={props => {
            const restaurant = restaurants.find(restaurant => restaurant.id === props.match.params.id)
            console.log(restaurant)
            return <NewRestaurantForm restaurant={restaurant} {...props}/>
            }
          }/>
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    restaurants: state.myRestaurants
  })
}


export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
