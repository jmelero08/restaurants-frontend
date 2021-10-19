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
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar/> : <Home/> } 
        <Switch>
          {/* <Route exact path='/' render={()=> loggedIn ? <MyRestaurants/> : <Home/>}/> */}
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/restaurants' component={MyRestaurants}/>
          <Route exact path='/restaurants/new' component={NewRestaurantForm}/>
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
  })
}


export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
