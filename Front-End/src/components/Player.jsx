import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../Context/PlayerContext'

const Player = () => {

    const {seekBg, seekBar, playStatus, play, pause, track, setTrack, time, previous, next, seekSong} = useContext(PlayerContext);

  return (
    <div className='player'>
        <div className="song_details">
            <img className='song_image' src={track.image} alt="" />
            <div>
                <p>{track.name}</p>
                <p className='song_desc'>{track.desc.slice(0,12)}</p>
            </div>
        </div>

        <div className="player_controls">
            <div className="btns">
                <img className='btn_icons' src={assets.shuffle_icon} alt="" />
                <img onClick={previous} className='btn_icons' src={assets.prev_icon} alt="" />
                {playStatus
                    ?<img onClick={pause} className='btn_icons' src={assets.pause_icon} alt="" />
                    :<img onClick={play} className='btn_icons' src={assets.play_icon} alt="" />
                }
                <img onClick={next} className='btn_icons' src={assets.next_icon} alt="" />
                <img className='btn_icons' src={assets.loop_icon} alt="" />
            </div>

            <div className="progress_bar">
                <p>{Number(time.currentTime.minute)}:{time.currentTime.second}</p>
                <div ref={seekBg} onClick={seekSong} className="progress">
                    <hr ref={seekBar} className='seek_progress_bar' />
                </div>
                <p>{Number(time.totalTime.minute)}:{time.totalTime.second}</p>
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