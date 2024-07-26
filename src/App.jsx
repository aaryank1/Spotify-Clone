import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'

const App = () => {
  return (
    <div className="app">
      <div className="components">
        <Sidebar />
        <Player />
      </div>
    </div>
  )
}

export default App