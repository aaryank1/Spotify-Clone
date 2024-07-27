import React from 'react'

const AlbumItem = ({img, name, desc, id}) => {
  return (
    <div className='album_container'>
        <img className='album_cover' src={img} alt="" />
        <p className='album_name'>{name}</p>
        <p className='album_desc'>{desc}</p>
    </div>
  )
}

export default AlbumItem