import React from 'react'
import './Main.css'
import book from './book.jpg'
import car from './car.jpg'
import code from './code.jpg'
import flower from './flower.jpg'
import bg1 from './bg1.png'
import bg2 from './bg2.png'


const Main = () => {
  return (
    <div>
    <div className='main-container'>
        <div className="images">
            <img src={book} alt="" className="posters" />
            <img src={car} alt="" className="posters" />
            <img src={code} alt="" className="posters" />
            <img src={flower} alt="" className="posters" />
        </div>
        
        </div>
        <img src={bg1} alt="" className="bg1" />
        <img src={bg2} alt="" className="bg2" />
        </div>
      
  
  )
}

export default Main
