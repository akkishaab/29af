// LogoutButton.js
import React from 'react'
import './index.css'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = ({history}) => {
  const handleLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="logout-container">
      <button className="logout-button" type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
