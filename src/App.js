import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from "./components/NavBar.js"
import Login from './components/Login.js'
import Signup from './components/SignUp.js'
import MyRestaurants from './components/MyRestaurants.js'
import MainContainer from "./components/MainContainer.js"
import { Route } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <MainContainer/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/my-restaurants' component={MyRestaurants}/>
      </div>
    );
  }
}


export default connect(null, { getCurrentUser })(App);
