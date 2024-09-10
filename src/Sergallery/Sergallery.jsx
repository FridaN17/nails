import React from 'react'
import './Sergallery.css'


const Sergallery = () => {
  return (
    <div className='Sergallery'>
        <div className='Serwrapper'>
            <div className='cardser'>
            <img src="./images/coll5.jpg" alt="" />
            <div className='infoser'>
              <h1>Gel Nails</h1>
              <p>Create exceptional gel nails in any look, length or shape.</p>
            </div>
                </div>
        
        <div className='cardser'>
        <img src="./images/coll6.jpg" alt="" />
            <div className='infoser'>
              <h1>Semi-Permanent</h1>
              <p>Start with Sopolish, the most professional semi-permanent nail service.</p>
            </div>  
        </div>
      
        <div className='cardser'>
        <img src="./images/coll7.jpg" alt="" />
            <div className='infoser'>
              <h1>Manicure</h1>
              <p>There is nothing a fresh manicure can't fix.</p>
            </div>
                
        </div>
         
        <div className='cardser'>
        <img src="./images/coll8.png" alt="" />
            <div className='infoser'>
              <h1>Pedicure</h1>
              <p>A great pedicure can be as soothing to the soul as well to the sole.</p>
            </div>
                
        </div>
 
        </div>
    
    </div>
  )
}

export default Sergallery;