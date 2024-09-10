import React, { createContext } from 'react'
import HomeDetail from './homeDetail'

const mappingImageLisContext = createContext(null);
const page = () => {
  return (
      <>
      <mappingImageLisContext.Provider 
      value={null}>
        <HomeDetail/>
        </mappingImageLisContext.Provider>
      </>
  );
};

export { mappingImageLisContext };
export default page;
