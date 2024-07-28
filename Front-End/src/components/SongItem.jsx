import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext';

const SongItem = ({img, name, desc, id}) => {

  const { playWithId } = useContext(PlayerContext)

  return (
    <div onClick={()=>playWithId(id)} className='songs_container'>
        <img className='song_cover' src={img} alt="" />
        <p className='song_name'>{name}</p>
        <p className='song_desc'>{name}</p>
    </div>
  )
}

export default SongItem