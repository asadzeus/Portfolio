import React from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll'


export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="left">
            <div className="logo">Alper</div>
        </div>

        <div className="right">
            <ul className='nav-links'>
                <li><Link to="home" spy={true} smooth={true} offset={-100} duration={100} className='link'>Home</Link></li>
                <li><Link to="about" spy={true} smooth={true} offset={-100} duration={100} className='link'>About</Link></li>
                <li><Link to="projects" spy={true} smooth={true} offset={-100} duration={100} className='link'>Projects</Link></li>
                <li><Link to="skills" spy={true} smooth={true} offset={-100} duration={100} className='link'>Skills</Link></li>
                <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={100} className='link'>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}
