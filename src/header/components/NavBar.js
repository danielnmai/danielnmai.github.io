import React from 'react';
import s from './styles/navBar.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class NavBar extends React.Component {
  render(){
    return (
      <div className='nav'>
        <a href='#home'>Home</a>
        <a href='#project'>Projects</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </div>
    )
  }
}

export default withStyles(s)(NavBar)
