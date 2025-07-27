import React from 'react'
import './Main.css'
import pic1 from '../assets/pic1.jpeg'
import pic2 from '../assets/pic2.jpeg'
import pic3 from '../assets/pic3.jpeg'

const Main = () => {
  return (
    <div className='main-container'>
        <div className="images">
            <img src={pic1} alt="" className="posters" />
            <img src={pic2} alt="" className="posters" />
            <img src={pic3} alt="" className="posters" />
        </div>
      
    </div>
  )
}

export default Main
