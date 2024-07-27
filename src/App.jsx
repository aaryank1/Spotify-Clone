import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'

const App = () => {
  return (
    <div className="app">
      <div className="components">
        <Sidebar />
        <Display />
      </div>
      <Player />
    </div>
  )
}

export default App