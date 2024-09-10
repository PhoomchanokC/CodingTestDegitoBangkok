
import React from 'react'
import './randomtravel.css'
type Props = {}

const RandomTravel = (props: Props) => {
  return (
    <div className='main-randomtravel-body '>
    <div className='main-randomtravel'>
        <img className='random-image'src='https://www.planetware.com/photos-large/IND/india-top-attractions-jaisalmer.jpg'></img> 
    </div> 
    <div className='text-img'>
        <h1>Inredible India</h1>
        <p className='p-text-img'>
            "For Where thy treasure is here also will thy heart be."
        </p>
    </div>
    </div> 
  )
}

export default RandomTravel