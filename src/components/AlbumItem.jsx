import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({img, name, desc, id}) => {

  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='album_container'>
        <img className='album_cover' src={img} alt="" />
        <p className='album_name'>{name}</p>
        <p className='album_desc'>{desc}</p>
    </div>
  )
}

export default AlbumItem