import React from 'react'
import './gallery.css'

const Gallery = () => {
  return (
    <div className='gallerycontainer'>



    <div className='galleryslide'>




        <div className='galleryitem' style={background-Imageurl('../../public/images/nn2.jpg')}>
            <div className='gallerycontent'>
                <div className='name'>GEL Nails </div>
                <div className='des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, repellendus!</div>
               <button>See more </button>
            </div>
         </div>
         <div className='galleryitem' style={background-Imageurl('../../public/images/nn2.jpg')}>
            <div className='gallerycontent'>
                <div className='name'>Semi-Permanent </div>
                <div className='des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, repellendus!</div>
               <button>See more </button>
            </div>
         </div>
         <div className='galleryitem' style={background-Imageurl('../../public/images/nn2.jpg')}>
            <div className='gallerycontent'>
                <div className='name'>Manicure </div>
                <div className='des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, repellendus!</div>
               <button>See more </button>
            </div>
         </div>
         <div className='galleryitem' style={background-Imageurl('../../public/images/nn2.jpg')}>
            <div className='gallerycontent'>
                <div className='name'>Pedicure </div>
                <div className='des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, repellendus!</div>
               <button>See more </button>
            </div>
         </div>
    </div>

    </div>
  )
}

export default Gallery;
