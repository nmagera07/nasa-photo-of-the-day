import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Date from './Date'
import Explanation from './Explanation'
import Title from './Title'
import Video from './Video'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

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
            <h3>Second API</h3>
             <Modal trigger={<Button>Click here for more info</Button>}>
                <Modal.Header>NASA API Info</Modal.Header>
                <Modal.Content video>
                <Video video={newPicture.url} />
                <Modal.Description>
                    <Header><Title title={newPicture.title} /></Header>
                    <Date date={newPicture.date}/>
                    <Explanation explanation={newPicture.explanation} />
                </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
     );
}
 
export default NewAPI;