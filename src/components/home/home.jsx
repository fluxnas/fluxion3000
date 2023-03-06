import React from 'react'
import { Link } from 'react-router-dom';
// import Homephoto from './src/assets/bkgphoto.jpg'
import logo from './src/assets/logo.png'

export default function home() {
  return (
    <div className='Home'>

    {/* <img src={Homephoto} /> */}

    <Link to="/login"/>
    <div>
      <img src={logo} alt="logo" />
    </div>

    </div>
  )
}
