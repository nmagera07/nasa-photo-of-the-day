import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Route } from 'react-router-dom'
import Date from './Date'
import Explanation from './Explanation'
import Title from './Title'
import Picture from './Picture'

function FirstAPI() {
  const [picture, setPicture] = useState([])

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DNuSeFcWScxAOaRtXZhGdFABtaCxICAllGRWCvjZ')
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
      <Picture picture={picture.hdurl} />
      
    </div>
  );
}

export default FirstAPI;