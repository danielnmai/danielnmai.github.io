import React from 'react'
import TypedString from './TypedString'
import s from './styles/landing.css'
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Landing = () => {
  return (
    <div id='home' className='landing'>
    <div className="title">
      <h1>Daniel Mai</h1>
      <TypedString />
    </div>
  </div>
  );
};

export default withStyles(s)(Landing)
