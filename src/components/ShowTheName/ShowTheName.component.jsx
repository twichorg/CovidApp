import React from 'react'
import './ShowTheName.style.css'
import logo from '../../images/AKTURK.svg'


const ShowTheName = () => {
    return(
        <div className="logo">
         <img className="logo-image" src={logo}></img>
        </div>
    )
}

export default ShowTheName;