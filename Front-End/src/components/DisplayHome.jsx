import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'

const DisplayHome = () => {

    const {songsData, albumsData} = useContext(PlayerContext);

  return (
    <>
        <Navbar />
        <div className="navbar_options">
            <p className='all_suggestions'>All</p>
            <p className='music'>Music</p>
            <p className='podcast'>Podcast</p>
        </div>
        <div className="albums">
            <h1 className='album_titles'>Featured Charts</h1>
            <div className="albums_list">
                {albumsData.map((album, index)=> <AlbumItem key={index} name={album.name} desc={album.desc} img={album.image} id={album._id} />)}
            </div>
        </div>
        <div className="albums">
            <h1 className='album_titles'>Todays Biggest Hits</h1>
            <div className="albums_list">
                {songsData.map((song, index)=> <SongItem key={index} name={song.name} desc={song.desc} id={song._id} img={song.image} />)}
            </div>
        </div>
    </>
  )
}

export default DisplayHome