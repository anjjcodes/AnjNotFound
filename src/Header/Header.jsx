import React from 'react'
import './Header.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {

useGSAP( () => {
    gsap.fromTo(".head", 
        { y: -50, opacity: 0 },  
      { y: 0, opacity: 1, duration: 1, ease: "circ.inOut" }
    );
    }, []);


    const text = "ANJNOTFOUND";
  return (
    <div className='header'>
        <h1 className='head'>
            {text.split("").map((char, index) => {
                return <span key = {index}>{char}</span>
            })}
        </h1>
    </div>
  )
}

export default Header
