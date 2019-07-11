import React from 'react';
import {Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Nav = (props) => {
    return ( 
        <div>
            <Menu stackable >
                <Menu.Item ><Link to="/">Home</Link></Menu.Item>
                <Menu.Item ><Link to="/firstAPI">FirstAPI</Link></Menu.Item>
                <Menu.Item ><Link to="/newAPI">SecondAPI</Link></Menu.Item>
                
            </Menu>

            <h1>Welcome to the NASA API Page</h1>
        </div>
     );
}
 
export default Nav;