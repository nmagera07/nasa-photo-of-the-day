import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Route } from 'react-router-dom'
import "./App.css";
import FirstAPI from './components/FirstAPI'
import NewAPI from './components/NewAPI'
import Nav from './components/Nav'

function App() {
  // const [picture, setPicture] = useState([])

  // useEffect(() => {
  //   axios
  //     .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  //     .then(picture => {
  //       console.log(picture)
  //       setPicture(picture.data)
  //     })
  //     .catch(error => console.log("things went south"))
  // }, [])
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Route path="/firstAPI" component={FirstAPI} />
      <Route path="/newAPI" component={NewAPI} />
      
    </div>
  );
}

export default App;
