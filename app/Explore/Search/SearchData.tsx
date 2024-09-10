
import React from 'react'
import './searchdata.css'
import ListData from '../List/ListData'
import HotelIcon from '../../_Component/icon/hotelIcon.js'
import AirplaneIcon from '../../_Component/icon/AirplaneIcon.js'
import CarIcon from '../../_Component/icon/CarIcon.js'

type Props = {}

const SearchData = (props: Props) => {
  return (
    <div className='explore-main'>
      <input type="text" placeholder='   Search city, Country, Place for travel, advisory' className='searchbar'/>
      <h2 className='header'>What Are You Looking For?</h2>
      <div className="transport">
        <div className='topic-transport'>
          <div className=''>
          <HotelIcon/>
          </div>
          <h6>Hotel</h6>
        </div>
        <div className='topic-transport'>
        <div>
          <CarIcon/>
         </div>
          <h6>Flight</h6>
        </div>
        <div className='topic-transport'>
          <div className=''>
            <CarIcon/>
          </div>
          <h6>Car</h6>
        </div>
      </div>
      <input type="text" placeholder=' Search city, Country, Place for travel, advisory' className='locationsearch'/>
      <div>
      <input type="date" placeholder=' Search city, Country, Place for travel, advisory' className='datepicker'/>
      <input type="date" placeholder=' Search city, Country, Place for travel, advisory' className='datepicker'/>
      </div>
      <div>
        <input type="text" placeholder=' Search city, Country, Place for travel, advisory' className='text-input'/>
      </div>
      <div className='container-btn-search'>
        <button className='btn-search'>Search</button>
      </div>
      <ListData/>
    </div>
  )
}

export default SearchData