// App.js
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App
