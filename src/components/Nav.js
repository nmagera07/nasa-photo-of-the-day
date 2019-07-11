import React from 'react';
import {Link } from 'react-router-dom'

const Nav = (props) => {
    return ( 
        <div>
            <Link to="/">Home</Link>
            <Link to="/firstAPI">FirstAPI</Link>
            <Link to="/newAPI">Picture</Link>
            
        </div>
     );
}
 
export default Nav;