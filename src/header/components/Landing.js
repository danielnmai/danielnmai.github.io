import React from 'react'
import NavBar from './NavBar'
import TypedString from './TypedString'
import './styles/landing.css'


const Landing = (props) => {
  return (
    <div id='home' className='landing'>
    <div className="title">
      <h1>Daniel Mai</h1>
      <TypedString />
    </div>
  </div>
  );
};

export default Landing;
