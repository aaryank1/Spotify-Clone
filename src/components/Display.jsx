import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'

const Display = () => {
  return (
    <div>
        <div className="main_display">
            <Routes>
                <Route path='/' element={<DisplayHome/>}></Route>
            </Routes>
        </div>
    </div>
  )
}

export default Display