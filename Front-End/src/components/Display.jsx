import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {

  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
    }
    else{
      displayRef.current.style.background = `#121212`
    }
  })

  return (
    <div>
        <div ref={displayRef} className="main_display">
            <Routes>
                <Route path='/' element={<DisplayHome/>}></Route>
                <Route path='/album/:id' element={<DisplayAlbum/>}></Route>
            </Routes>
        </div>
    </div>
  )
}

export default Display