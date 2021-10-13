import './App.css';
import React from 'react';
import Login from "./components/Login.js"
import Logout from "./components/Logout.js"
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      this.props.currentUser ? <Logout/> : <Login/> 
    );
  }
}

const mapStateToProps = ({currentUser}) => {
  return ({
    currentUser
    // loggedIn: !!state.currentUser,
  })
}

export default connect(mapStateToProps, {getCurrentUser}) (App);
