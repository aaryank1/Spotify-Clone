import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { useContext } from 'react'
import Player from './Player'
import { PlayerContext } from '../Context/PlayerContext'

const Display = () => {

  const {albumsData} = useContext(PlayerContext)

  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split('/').pop() : "";
  const bgColor = isAlbum && albumsData.length>0 ? albumsData.find((x) => (x._id == albumId)).bgColor : "#121212";

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
            {albumsData.length > 0 ?
            <Routes>
                <Route path='/' element={<DisplayHome/>}></Route>
                <Route path='/album/:id' element={<DisplayAlbum album = {albumsData.find((x) => (x._id == albumId))} />}></Route>
            </Routes> : null
          }
        </div>
    </div>
  )
}

export default Display