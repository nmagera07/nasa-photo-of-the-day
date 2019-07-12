import React, {useState, useEffect} from "react";
import axios from 'axios'
import "../App.css";
import { Card, Image, Container, Button } from 'semantic-ui-react'

const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=DNuSeFcWScxAOaRtXZhGdFABtaCxICAllGRWCvjZ'

function FirstAPI() {
  const [picture, setPicture] = useState([])
 
  useEffect(() => {
    axios
      .get(baseUrl)
      .then(response => {
        console.log(response)
        setPicture(response.data)
      })
      .catch(error => error.response.data.error.message)
  }, [])

 const days = (month, year) =>
		[1, 3, 5, 7, 8, 10, 12].includes(month)
			? 31
			: [4, 6, 9, 11].includes(month)
			? 30
			: year % 4 == 0
			? 29
			: 28;

	function randomPhoto() {
		// 1995 first data point

		// Years: 1995 - current year (2019)

		const yearMin = 1995;
		const yearMax = 2019;
		const yearYear = Math.floor(
			Math.random() * (+yearMax - +yearMin) + +yearMin
		); // generate random year


		const monthMin = 1;
		const monthMax = 12;
		let month = Math.floor(
			Math.random() * (+monthMax - +monthMin) + +monthMin
		); // generate random year

		month = month.toString().padStart(2, '0')

		if (yearYear === 1995 && month < 6 ) {
			month += 6;
		}

		const minDay = 1;
		let maxDay = days(month, yearYear);
		const day = Math.floor(
			Math.random() * (+maxDay - +minDay) + +minDay
		); // generate random year

		axios.get(`${baseUrl}&date=${yearYear}-${month}-${day}`)
			.then(response => setPicture(response.data))
			.catch(err => err.response.data.error.message);
	}
  
  return (
    
    <div className="App">
    
    <Container text> 
        <Card centered fluid>
            <Button onClick={randomPhoto} color='blue'>Random Date</Button>
             <Card.Content>
                {picture.media_type === 'image' ? ( <Image  src={picture.hdurl} className="nasa-picture"/> ) : <iframe src={picture.url} />}
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