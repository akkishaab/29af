// ProtectedRoute.js
import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const JWTToken = Cookies.get('jwt_token')

  return (
    <Route
      {...rest}
      render={props =>
        JWTToken ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

export default ProtectedRoute
