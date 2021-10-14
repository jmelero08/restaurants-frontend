
import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login.js"
import Logout from "./Logout.js"


const NavBar = ({currentUser}) => {
  return (
    <div className="NavBar">
        {currentUser ? <p>Welcome, {currentUser.attributes.name}</p> : ""}
        {currentUser ? <Logout/> : <Login/>}
    </div>
  )
}

const mapStateToProps = ({currentUser}) => {
    return ({
      currentUser
      // loggedIn: !!state.currentUser,
    })
}

export default connect (mapStateToProps)(NavBar)