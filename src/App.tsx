import * as React from 'react'
import { HashRouter, Route, withRouter } from 'react-router-dom'
import './App.css'
import Side from './components/side'
import Login from './pages/login'

export default () => {
  return (
    <div className="App">
      <HashRouter>
        <Route component={withRouter(Login)} path="/login" />
        <Route component={withRouter(Side)} path="/home" />
      </HashRouter>
    </div>
  )
}
