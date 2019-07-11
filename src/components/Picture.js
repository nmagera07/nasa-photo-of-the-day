import React from 'react';

const Picture = (props) => {
    return ( 
        <div>
            <img src={props.picture} alt="halo"></img>
        </div>
     );
}
 
export default Picture;