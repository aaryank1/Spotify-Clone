import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <img className='logo' src={assets.logo} alt="" />
        <img className='logo_small' src={assets.logo_small} hidden alt="" />

        <NavLink to={'/add-song'} className='sidebar_options'>
            <img className='list_icons' src={assets.add_song} alt="" />
            <p className='add_song'>Add Song</p>
        </NavLink>

        <NavLink to={'/list-song'} className='sidebar_options'>
            <img className='list_icons' src={assets.song_icon} alt="" />
            <p className='list_song'>List Song</p>
        </NavLink>
        
        <NavLink to={'/add-album'} className='sidebar_options'>
            <img className='list_icons' src={assets.add_album} alt="" />
            <p className='add_album'>Add Album</p>
        </NavLink>
        
        <NavLink to={'/list-album'} className='sidebar_options'>
            <img className='list_icons' src={assets.album_icon} alt="" />
            <p className='list_album'>List Album</p>
        </NavLink>
    </div>
  )
}

export default Sidebar