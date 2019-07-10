import React from 'react';

const Video = (props) => {
    return ( 
        <div>
            <iframe width="420" height="315" title="nasa video"src={props.video} />
        </div>
     );
}
 
export default Video;