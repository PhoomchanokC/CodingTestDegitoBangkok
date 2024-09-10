import React, { createContext, useContext } from 'react'
import SearchData from './Search/SearchData'
import ListData from './List/ListData'
type Props = {}


const mappingImageLisContext = createContext(null);
const HomeDetail = (props: Props) => {
  return (
    <>
    
      <SearchData/>
      <ListData/>
    </>
  )
}

export default HomeDetail