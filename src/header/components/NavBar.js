import React from 'react';
import './styles/navBar.css';

class NavBar extends React.Component {
  render(){
    return (
      <div className='navbar'>
        <a href='#home'>Home</a>
        <a href='#project'>Projects</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </div>
    )
  }
}

export default NavBar;
