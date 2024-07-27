import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'

const Display = () => {
  return (
    <div>
        <div className="main_display">
            <Routes>
                <Route path='/' element={<DisplayHome/>}></Route>
                <Route path='/album/:id' element={<DisplayAlbum/>}></Route>
            </Routes>
        </div>
    </div>
  )
}

export default Display