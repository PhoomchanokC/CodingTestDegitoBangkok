"use client"
import React, { createContext, useContext } from 'react'
import SearchData from './Search/SearchData'
import RandomTravel from './RandomTravel/RandomTravel'
type Props = {}


const mappingImageLisContext = createContext(null);
const HomeDetail = (props: Props) => {
  return (
    <>
      <SearchData/>
      <RandomTravel/>
    </>
  )
}

export default HomeDetail