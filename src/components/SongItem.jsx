import React from 'react'

const SongItem = ({img, name, desc, id}) => {
  return (
    <div className='songs_container'>
        <img className='song_cover' src={img} alt="" />
        <p className='song_name'>{name}</p>
        <p className='song_desc'>{name}</p>
    </div>
  )
}

export default SongItem