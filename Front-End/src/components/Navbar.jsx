import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <>
        <div className='navbar'>
            <div className="nav_icons">
                <img onClick={()=>navigate(-1)} className='nav_btns' src={assets.arrow_left} alt="" />
                <img onClick={()=>navigate(1)} className='nav_btns' src={assets.arrow_right} alt="" />
            </div>

            <div className="search_bar">
                <img className='search_icon' src={assets.search_icon} alt="" />
                <input className='search_input' type="text" name="song_search" id="song_search" placeholder='Search' />
            </div>
            <div className="account_options">
                <p className='account_logo'>A</p>
            </div>
        </div>
    </>
  )
}

export default Navbar