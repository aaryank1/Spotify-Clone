import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { url } from '../App';
import axios from 'axios';

const ListSong = () => {

  const [data,setData] = useState([]);
  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);

      if(response.data.success){
        setData(response.data.songs);
      }
      
    } catch (error) {
      toast.error("Error Occured");
    }
  }

  const removeSong = async (id) => {
    try {
      const response = await axios.post(`${url}/api/song/remove`, {id});

      if(response.data.success){
        toast.success(response.data.message);
        await fetchSongs();
      }
    } catch (error) {
      toast.error("Error Occured");
    }
  }

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className='song_list_panel'>
      <h1>All Songs List</h1>
      <br />
      <div className='song_list_container'>
        <div className="admin_song_list">
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>
        {data.map((song, index) => {
          return (<div key={index} className='song_list_item' >
            <img src={song.image} alt="" style={{width:"2.3rem"}} />
            <p>{song.name}</p>
            <p>{song.album}</p>
            <p>{song.duration}</p>
            <p className='delete_btn' onClick={()=>removeSong(song._id)} >x</p>
          </div>)
        })}
      </div>
    </div>
  )
}

export default ListSong