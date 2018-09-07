import React, { Component } from 'react';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles/center.css';

class Center extends Component {
  render() {
    return (
      <div className='center'>
        <About />
        <Project />
        <Contact />
      </div>
    )
  }
}

export default withStyles(s)(Center);
