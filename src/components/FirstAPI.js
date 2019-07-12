import React, {useState, useEffect} from "react";
import axios from 'axios'
import "../App.css";
import { Card, Image, Container } from 'semantic-ui-react'

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
    
    <Container text> 
        <Card centered fluid>
             <Image  src={picture.hdurl} className="nasa-picture"/>
             <Card.Content>
                <Card.Header>{picture.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{picture.date}</span>
                </Card.Meta>
                <Card.Description>
                    {picture.explanation}
                </Card.Description>
             </Card.Content>
        </Card>
  </Container>
  
    </div>
  );
}

export default FirstAPI;