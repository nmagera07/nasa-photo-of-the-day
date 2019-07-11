import React from "react";
import { Route } from 'react-router-dom'
import "./App.css";
import 'semantic-ui-css/semantic.min.css'
import FirstAPI from './components/FirstAPI'
import NewAPI from './components/NewAPI'
import Nav from './components/Nav'

function App() {
 
  return (
    <div className="App">
      <Route  path="/" component={Nav} />
      <Route  path="/firstAPI" component={FirstAPI} />
      <Route  path="/newAPI" component={NewAPI} />
      
    </div>
  );
}

export default App;
