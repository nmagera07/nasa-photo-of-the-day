import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Date from './components/Date'
import Explanation from './components/Explanation'
import Title from './components/Title'
import Video from './components/Video'

function App() {
  const [picture, setPicture] = useState([])

  useEffect(() => {
    axios('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(picture => {
        console.log(picture)
        setPicture(picture.data)
      })
      .catch(error => console.log("things went south"))
  }, [])
  return (
    <div className="App">
      <Title title={picture.title} />
      <Date date={picture.date}/>
      <Explanation explanation={picture.explanation} />
      <Video video={picture.url} />
      
    </div>
  );
}

export default App;
