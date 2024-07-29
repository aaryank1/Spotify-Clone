import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../Context/PlayerContext';
import { useState } from 'react';
import { useEffect } from 'react';

const DisplayAlbum = ({album}) => {

    const {id} = useParams();
    const [albumData, setAlbumData] = useState("");
    const {playWithId, albumsData, songsData} = useContext(PlayerContext);

    useEffect(() => {
        albumsData.map((item) => {
            if(item._id===id){
                setAlbumData(item);
            }
        })
    },[]);

  return albumData ? (
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
            songsData.filter((item)=> item.album === album.name).map((song, index)=> (
                <div onClick={()=>playWithId(song._id)} key={index} className="song_data">
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
  ) : null
}

export default DisplayAlbum