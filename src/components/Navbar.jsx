import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <div className="nav_icons">
                <img className='nav_btns' src={assets.arrow_left} alt="" />
                <img className='nav_btns' src={assets.arrow_right} alt="" />
            </div>

            <div className="search_bar">
                <img className='search_icon' src={assets.search_icon} alt="" />
                <input className='search_input' type="text" name="song_search" id="song_search" placeholder='Search' />
            </div>
            <div className="account_options">
                <p className='account_logo'>A</p>
            </div>
        </div>
        <div className="navbar_options">
            <p className='all_suggestions'>All</p>
            <p className='music'>Music</p>
            <p className='podcast'>Podcast</p>
        </div>
    </>
  )
}

export default Navbar