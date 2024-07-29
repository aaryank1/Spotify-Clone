import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const AddAlbum = () => {
  const [image, setImage] = useState(false);
  const [color, setColor] = useState('#121212');
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('image', image);
      formData.append('bgColor', color);

      const response = await axios.post(`${url}/api/album/add`, formData);

      if(response.data.success){
        toast.success("Album Added");
        setName("");
        setDesc("");
        setColor('#121212')
        setImage(false);
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

  return loading ? (
    <div className="loading">
      <div className="load">

      </div>
    </div>
  ) :(
    <form onSubmit={onSubmitHandler} className='add_song_form_container' action="">
      <div className="uploads">
        <div className="upload_song">
          <p className='title'>Upload Album Image</p>
          <input onChange={(e)=> setImage(e.target.files[0])} type="file" accept='image/*' id="image" hidden />
          <label htmlFor="image">
            <img className='song_upload_img' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
        </div>
      </div>

      <div className="forms">
        <h3>Album Name</h3>
        <input onChange={(e) => setName(e.target.value)} value={name} className='input_song name' type="text" placeholder='Enter Song Name' id="song_name" />
      </div>

      <div className="forms">
        <h3>Album Description</h3>
        <input onChange={(e) => setDesc(e.target.value)} value={desc} className='input_song desc' type="text" placeholder='Enter A Song Description' id="song_desc" />
      </div>

      <div className="forms">
        <h3>Background Color</h3>
        <input onChange={(e) => setColor(e.target.value)} value={color} type="color" />
      </div>

      <button type="submit" className='submit_song' ><h1>Submit</h1></button>
    </form>
  )
}

export default AddAlbum