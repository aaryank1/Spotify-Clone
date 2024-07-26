import React from 'react'
import { assets } from "../assets/assets"


const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <div className='home'>
            <img className="home_icon" src={assets.home_icon} alt="home_icon" />
            <p>Home</p>
        </div>

        <div className="libraries">
            <div className="lib_top_panel">
                <div className="lib">
                    <img className='stack_icon' src={assets.stack_icon} alt="lib" />
                    <p>Your Library</p>
                </div>
                <div className="playlist_options">
                    <img className="playlist plus_icon" src={assets.plus_icon} alt="plus_icon" />
                    <img className="playlist arrow_icon" src={assets.arrow_icon} alt="arrow_icon" />
                </div>
            </div>
            <div className="playlist_section">
                <div className="text_items">
                    <h4>Create Your First Playlist</h4>
                    <p>It's Easy, we'll help you</p>
                </div>
                <button>Create Playlist</button>
            </div>

            <div className="playlist_section">
                <div className="text_items">
                    <h4>Let's find some podcasts to follow</h4>
                    <p>We'll keep you updated on new episodes</p>
                </div>
                <button>Browse Podcasts</button>
            </div>
        </div>
    </div>
    
  )
}

export default Sidebar