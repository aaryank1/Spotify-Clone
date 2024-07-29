import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const AddSong = () => {

  const [image, setImage] = useState(false);
  const [song, setSong] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('image', image);
      formData.append('audio', song);
      formData.append('album', album);

      const response = await axios.post(`${url}/api/song/add`, formData);

      if(response.data.success){
        toast.success("Song Added");
        setName("");
        setDesc("");
        setAlbum("none");
        setImage(false);
        setSong(false);
      }
      else{
        toast.error("Something Went Wrong");
      }
      
    } catch (error) {
      console.log(error);
      toast.error("Error Occured");
    }
    setLoading(false);
  }

  const loadAlbumData = async ()=>{
    try{
      const response = await axios.get(`${url}/api/album/list`);

      if(response.data.success){
        setAlbumData(response.data.albums)
      }
      else{
        toast.error("Unable to Load Albums Data")
      }
    }
    catch(error){
      toast.error("Error Occured")
    }
  }

  useEffect(() => {
    loadAlbumData();
  })

  return loading ? (
    <div className="loading">
      <div className="load">

      </div>
    </div>
  ) :(
    <form onSubmit={onSubmitHandler} className='add_song_form_container' action="">
      <div className="uploads">
        <div className="upload_song">
          <p className='title'>Upload Song</p>
          <input onChange={(e)=> setSong(e.target.files[0])} type="file" id='song' accept='audio/*' name="" hidden />
          <label htmlFor="song">
            <img className='song_upload_img' src={ song ? assets.upload_added : assets.upload_song} alt="" />
          </label>
        </div>
        <div className="upload_song">
          <p className='title'>Upload Image</p>
          <input onChange={(e)=> setImage(e.target.files[0])} type="file" accept='image/*' id="image" hidden />
          <label htmlFor="image">
            <img className='song_upload_img' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
        </div>
      </div>

      <div className="forms">
        <h3>Song Name</h3>
        <input onChange={(e) => setName(e.target.value)} value={name} className='input_song name' type="text" placeholder='Enter Song Name' id="song_name" />
      </div>

      <div className="forms">
        <h3>Song Description</h3>
        <input onChange={(e) => setDesc(e.target.value)} value={desc} className='input_song desc' type="text" placeholder='Enter A Song Description' id="song_desc" />
      </div>

      <div>
        <h3>Album</h3>
        <select onChange={(e) => setAlbum(e.target.value)} defaultValue={album} className='song_album_select'>
          <option value="none">None</option>
          {albumData.map((album, index) => (<option key={index} value={album.name}>{album.name}</option>))}
        </select>
      </div>

      <button type="submit" className='submit_song' ><h1>Submit</h1></button>
    </form>
  )
}

export default AddSong