import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Date from './Date'
import Explanation from './Explanation'
import Title from './Title'
import Video from './Video'

const NewAPI = (props) => {
    const [newPicture, setNewPicture] = useState([])

    useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DNuSeFcWScxAOaRtXZhGdFABtaCxICAllGRWCvjZ&date=2019-07-10')
      .then(newPicture => {
        console.log(newPicture)
        setNewPicture(newPicture.data)
      })
      .catch(error => console.log("things went south...way south"))
  }, [])
    return ( 
        <div>
            <Title title={newPicture.title} />
            <Date date={newPicture.date}/>
            <Explanation explanation={newPicture.explanation} />
            <Video video={newPicture.url} />
        </div>
     );
}
 
export default NewAPI;