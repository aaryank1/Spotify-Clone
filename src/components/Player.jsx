import React from 'react'
import { assets, songsData } from '../assets/assets'

const Player = () => {
  return (
    <div className='player'>
        <div className="song_details">
            <img className='song_image' src={songsData[0].image} alt="" />
            <div>
                <p>{songsData[0].name}</p>
                <p className='song_desc'>{songsData[0].desc.slice(0,12)}</p>
            </div>
        </div>

        <div className="player_controls">
            <div className="btns">
                <img className='btn_icons' src={assets.shuffle_icon} alt="" />
                <img className='btn_icons' src={assets.prev_icon} alt="" />
                <img className='btn_icons' src={assets.play_icon} alt="" />
                <img className='btn_icons' src={assets.next_icon} alt="" />
                <img className='btn_icons' src={assets.loop_icon} alt="" />
            </div>

            <div className="progress_bar">
                <p>00:00</p>
                <div className="progress">
                    <hr className='seek_progress_bar' />
                </div>
                <p>00:00</p>
            </div>
        </div>
        <div className="song_options">
            <img className='btn_icons' src={assets.plays_icon} alt="" />
            <img className='btn_icons' src={assets.mic_icon} alt="" />
            <img className='btn_icons' src={assets.queue_icon} alt="" />
            <img className='btn_icons' src={assets.speaker_icon} alt="" />
            <img className='btn_icons' src={assets.volume_icon} alt="" />

            <div className="volume_bar">

            </div>

            <img className='btn_icons' src={assets.mini_player_icon} alt="" />
            <img className='btn_icons' src={assets.zoom_icon} alt="" />
        </div>
    </div>
  )
}

export default Player