import React from 'react'
import '../utils/login.css'

const Login = () => {
  return (
    <div className="login_page_container">
        <div className="login_page">
            <img className='spotify_logo_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="spotify_logo" />
            <button className='spotify_connect'>Connect To Your Spotify Account</button>
        </div>
    </div>
  )
}

export default Login