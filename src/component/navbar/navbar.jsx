import React, { Component } from 'react';
import './navbar.css'
import {Link} from "react-router-dom";
class Navbar extends Component{
    render(){
        return(
            <nav className='d-flex justify-content-between align-items-end  text-white bg-dark'>
                <h1 className='logo'><Link to='/' className='nav-link'>Logo</Link></h1>
                <ul className='list-unstyled d-flex '>
                    <li className='active text-warning'><Link to='/' className='nav-link'>Home</Link> </li>
                    <li><Link to='/about' className='nav-link'>About</Link> </li>
                    <li><Link to='/contact' className='nav-link'>Contact</Link> </li>
                    <li><Link to='/login' className='nav-link'>Login</Link> </li>
                    
                </ul>
            </nav>
        );
    }
}
export default Navbar;