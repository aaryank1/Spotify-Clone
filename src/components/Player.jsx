import React from 'react'
import { assets, songsData } from '../assets/assets'

const Player = () => {
  return (
    <div className='player'>
        <div className="song_details">
            <img className='song_image' src={songsData[0].image} alt="" />
            <div>
                <p>{songsData[0].name}</p>
                <p>{songsData[0].desc.slice(0,12)}</p>
            </div>
        </div>

        <div className="player_controls">
            <div className="btns">
                <img src={assets.shuffle_icon} alt="" />
                <img src={assets.prev_icon} alt="" />
                <img src={assets.play_icon} alt="" />
                <img src={assets.next_icon} alt="" />
                <img src={assets.loop_icon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Player