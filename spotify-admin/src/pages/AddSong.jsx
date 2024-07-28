import React from 'react'
import { assets } from '../assets/assets'

const AddSong = () => {
  return (
    <form className='add_song_form_container' action="">
      <div className="uploads">
        <div className="upload_song">
          <p className='title'>Upload Song</p>
          <input type="file" id='song' accept='audio/*' name="" hidden />
          <label htmlFor="song">
            <img className='song_upload_img' src={assets.upload_song} alt="" />
          </label>
        </div>
        <div className="upload_song">
          <p className='title'>Upload Image</p>
          <input type="file" accept='image/*' id="image" hidden />
          <label htmlFor="image">
            <img className='song_upload_img' src={assets.upload_area} alt="" />
          </label>
        </div>
      </div>

      <div className="forms">
        <h3>Song Name</h3>
        <input className='input_song name' type="text" placeholder='Enter Song Name' id="song_name" />
      </div>

      <div className="forms">
        <h3>Song Description</h3>
        <input className='input_song desc' type="text" placeholder='Enter A Song Description' id="song_desc" />
      </div>

      <div>
        <h3>Album</h3>
        <select className='song_album_select'>
          <option value="none">None</option>
        </select>
      </div>

      <button type="submit" className='submit_song' >Submit</button>
    </form>
  )
}

export default AddSong