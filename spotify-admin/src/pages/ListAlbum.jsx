import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { url } from '../App';
import axios from 'axios';

const ListAlbum = () => {
  const [data,setData] = useState([]);
  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);

      if(response.data.success){
        setData(response.data.albums);
      }
      
    } catch (error) {
      toast.error("Error Occured");
    }
  }

  const removeSong = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, {id});

      if(response.data.success){
        toast.success(response.data.message);
        await fetchAlbums();
      }
    } catch (error) {
      toast.error("Error Occured");
    }
  }

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div className='song_list_panel'>
      <h1>All Albums List</h1>
      <br />
      <div className='song_list_container'>
        <div className="admin_song_list">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album Color</b>
          <b>Action</b>
        </div>
        {data.map((album, index) => {
          return (<div key={index} className='song_list_item' >
            <img src={album.image} alt="" style={{width:"2.3rem"}} />
            <p>{album.name}</p>
            <p>{album.desc}</p>
            <input type="color" value={album.bgColor} />
            <p className='delete_btn' onClick={()=>removeSong(album._id)} >x</p>
          </div>)
        })}
      </div>
    </div>
  )
}

export default ListAlbum