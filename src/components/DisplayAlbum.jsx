import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];

  return (
    <>
        <Navbar />
        <div className="album_data">
            <img className='album_section_cover' src={albumData.image} alt="" />
            <div className="album_details">
                <p>Playlist</p>
                <h1 className='album_title'>{albumData.name}</h1>
                <h4 className='album_desc'>{albumData.desc}</h4>
                <p className='album_stats'>
                    <img className='spotify_logo' src={assets.spotify_logo} alt="" />
                    <b>Spotify</b>
                    • <b>50 Songs,</b>
                    • 53,231,432 Likes
                    about 2 hr 45 min
                </p>
            </div>
        </div>

        <div className="album_songs_list">
            <p className='title'><b style={{marginRight: "1.3rem"}}>#</b>Title</p>
            <p className='album_names'>Album</p>
            <img className='clock_icon' src={assets.clock_icon} alt="" />
        </div>
        {
            songsData.map((song, index)=> (
                <div key={index} className="song_data">
                    <p className='serial_no'>
                        <b style={{marginRight: "1rem"}}>{index+1}</b>
                        <img className="song_cover_list" src={song.image} alt="" />
                        {song.name}
                    </p>
                    <p className='album_data_name'>{albumData.name}</p>
                    <p className='album_song_duration'>{song.duration}</p>
                </div>
            ))
        }
    </>
  )
}

export default DisplayAlbum