import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProjectScreen from './screens/ProjectScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  
  return (
    <Router>
      <Route exact path ="/" component = {HomeScreen}/>
      <Route exact path ="/login" component = {LoginScreen}/>
      <Route exact path ="/register" component = {RegisterScreen}/>
      <Route exact path ="/project" component = {ProjectScreen}/>
    </Router>
  );
}

export default App;
