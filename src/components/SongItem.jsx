import React from 'react'
import { useNavigate } from 'react-router-dom'

const SongItem = ({img, name, desc, id}) => {

    const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/song/${id}`)} className='songs_container'>
        <img className='song_cover' src={img} alt="" />
        <p className='song_name'>{name}</p>
        <p className='song_desc'>{name}</p>
    </div>
  )
}

export default SongItem