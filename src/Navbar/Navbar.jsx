import React from 'react'
import './navbar.css'


const Navbar = () => {
  return (
    <div className='navcontent'>
    <div className='navfilter'>
      <h1 class="Navtitle"><span> Nina Nails</span></h1>
      <div className='Navmenu'>
        <a className='ancor' href="#home">Home</a>
        <a  className='ancor'href="#Services">Services</a>
        <a className='ancor' href="#contant">Contact</a>
        <a className='ancor' href="#About">About</a>
    </div>
    </div>
    </div>
     
    )

  };
export default Navbar;