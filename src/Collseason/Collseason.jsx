import React from 'react'
import './Collseason.css'

const Collseason = () => {
  return (
    <div className='Collseason'>
        <div className='headingcoll'>
            <h1> Season Collection </h1>
            <p>We offer all kind of nails for each season that you make you to feel comfy with yourself. </p>
        </div>
       <div className='collseason-bottom'>
       <div className='containercoll'>
        <input type="radio" name="slide" id="c1"  ></input>
        <label for="c1" class='colcard c1'>
            <div className='rowcoll'>
                <div className='icon'> 1 </div>
                <div className='descriptioncoll'>
                    <h4>Winter</h4>
                    <p>winter nails</p>
                </div>
                </div>
        </label>

        <input type="radio" name="slide" id="c2" ></input>
        <label for="c2" class='colcard'>
            <div className='rowcoll'>
                <div className='icon'> 2 </div>
                <div className='descriptioncoll'>
                    <h4>Autumn</h4>
                    <p>Autumn nails</p>
                </div>
                </div>
             </label>


        <input type="radio" name="slide" id="c3" ></input>
        <label for="c3" class='colcard'>
            <div className='rowcoll'>
                <div className='icon'> 3 </div>
                <div className='descriptioncoll'>
                    <h4>Spring</h4>
                    <p>Spring nails</p>
                </div>
                 </div>
              </label>
        <input type="radio" name="slide" id="c4" ></input>
        <label for="c4" class='colcard'>
            <div className='rowcoll'>
                <div className='icon'> 4 </div>
                <div className='descriptioncoll'>
                    <h4>Summer</h4>
                    <p>Summer nails</p>
                </div>

            </div>

        </label>
        </div>
        <div className='coleft'>
            <h2>Season collection </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Delectus deserunt obcaecati, iste quod repellat rerum iure cupiditate nostrum ex voluptatum nam repellendus? 
         Dolorem unde vero non officiis facilis nemo excepturi!</p>
        </div>
        </div>
</div>
  )
}

export default Collseason