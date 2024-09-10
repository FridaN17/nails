import React from 'react'
import'./Service.css'

const Service = () => {
  return (
    <div className='Servicebody'>
      <div className='Servicecontainer'>
        <div className='Servicecard'>
            <div className='Servicelines'></div>
            <div className='imgBx'>
              <img src='../../public/images/Nails1.jpg'></img>
                
            </div>
            <div className='Servicecontent'>
              <div className='details'>
                <h2>Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a href='#'>Read more</a>
              </div>
            </div>
        </div>
        <div className='Servicecard'>
            <div className='Servicelines'></div>
            <div className='imgBx'>
              <img src='./images/nail7.png'></img>
                
            </div>
            <div className='Servicecontent'>
              <div className='details'>
                <h2>Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a href='#'>Read more</a>
              </div>
            </div>
        </div>
        <div className='Servicecard'>
            <div className='Servicelines'></div>
            <div className='imgBx'>
              <img src='./images/nail8.png'></img>
                
            </div>
            <div className='Servicecontent'>
              <div className='details'>
                <h2>Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a href='#'>Read more</a>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Service ;