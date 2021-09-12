import React from 'react'
import Navbar from './components/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Addition from './components/Addition';
import Subtraction from './components/Subtraction';
import Multiplication from './components/Multiplication';
import pagenotfound from './components/pagenotfound';
import Registerstudent from './components/Registerstudent'
import Login from './components/Login'
import Fordemo from './components/Fordemo'


function App() {
  return (
    <Router>
      <>

        <Navbar />
        <Switch>
          <Route exact path="/" component = {Addition} /> 
          <Route exact path="/Subtraction" component = {Subtraction} /> 
          <Route exact path="/Multiplication" component = {Multiplication} />
          <Route exact path="/Registerstudent" component = {Registerstudent} />
          <Route exact path="/Login" component = {Login} />
          <Route exact path="/Fordemo" component = {Fordemo} />
          <Route component = {pagenotfound} /> 
        </Switch>
      </>
    </Router>
  )
}

export default App
