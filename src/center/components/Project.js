import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../styles/project.css';
import mBudget from '../styles/images/mbudget.jpg';
import studioGhibli from '../styles/images/studio-ghibli.png';
import heroku from '../styles/images/heroku.png';
import github from '../styles/images/github.png';


class Project extends Component {
  render() {
    return (
      <div id='project' className='project'>
        <h1>Portfolio</h1>
     <div className='grid-container'>
          <div className='item 1'>
            <img className='snapshot' src={mBudget}></img>
            <a href='https://github.com/danielnmai/budget-webclient' target='_blank'><img className='logo' src={github}></img></a>
            <a href='http://mbudget.herokuapp.com/' target='_blank'><img className='logo' src={heroku}></img></a>
            <p>mBudget is a personal finance tool that can give you a typical budget based on your salary and location. Built on Ruby on Rails.</p>
          </div>
          <div className='item 2'>
            <img className='snapshot' src={studioGhibli}></img>
            <a href='https://github.com/danielnmai/mini-capstone' target='_blank'><img className='logo' src={github}></img></a>
            <a href='https://e-commerce-mini-app.herokuapp.com/' target='_blank'><img className='logo' src={heroku}></img></a>
            <p>A React app that uses Redux for storing state, React Router for routing and Bootstrap 4 for quick styling. redux-thunk and redux-promise are added as middleware to fetch information from the API server, using axios.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Project)
