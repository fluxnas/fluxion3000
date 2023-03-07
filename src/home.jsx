import React from 'react'
// import { Link } from 'react-router-dom';
import Homephoto from './assets/bkgphoto.jpg'
// import logo from './assets/bkgphoto.jpg'


export default function home() {
  return (
    <div className='Home'>

    <img src={Homephoto} />

    {/* <Link to="/login">
      <img src={logo} alt="logo" />
    </Link> */}

    </div>
  )
}
