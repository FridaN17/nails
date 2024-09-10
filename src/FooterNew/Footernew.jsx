import React from 'react'
import './Footernew.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const Footernew = () => {
  return (
    <div className='Footernew'>
 
        <div className='Locate-us'>
         <p>Locate Us</p>
         <FontAwesomeIcon className='fa-map' icon={faMap}/> 
         <p className='paragragh'>This is location</p>
        </div>
         
        <div className='Email-us'>
         <p>Email Us</p>
         <FontAwesomeIcon className='faEnvelope' icon={faEnvelope}/>
         <p className='paragragh'>This is Envelope</p>
        </div>

        <div className='Contact-us '>
         <p>Contact Us</p>
         <FontAwesomeIcon className='faWhatsapp'icon={faWhatsapp}/>
         <p  className='paragragh'>This is Contact</p>
         </div>

        </div>
     
  )
}

export default Footernew