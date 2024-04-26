import React, {useState} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import {Redirect, useHistory} from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error('Login failed')
      }
      const data = await response.json()
      Cookies.set('jwt_token', data.jwt_token, {expires: 30, path: '/'})
      setIsLoggedIn(true) // Update login state
      history.replace('/') // Redirect to HomeRoute
    } catch (error) {
      console.error('Error:', error)
    }
  }

  if (isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">Please Login</h1>
      <button className="login-button" type="button" onClick={handleLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
