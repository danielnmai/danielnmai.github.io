import React, { Component } from 'react';
import '../styles/about.css';
import ProfilePic from '../styles/images/profile_pic.jpg';

class About extends Component {
  render() {
    return (
      <div id='about' className='about'>
        <div className='bio'>
          <h1>About</h1>
          <img id='profile_pic' src={ProfilePic} alt='profile_pic'></img>
          <h4>Welcome to my website!</h4>          
          <p>I am a Software Developer with computer science degree and experience with both hardware and software technologies. I have a true passion for solving human problems. In the past, I achieved this through providing hardware solutions. In the present, I write elegant code to make Internet a better place for people.</p>
          <p>Today, most of my personal projects are done with <b> React, Redux, Mobx, Node.js, and webpack.</b> Even though I consider myself a full stack developer, I enjoy working on front end, where I love to see my code having an direct impact on users. Yet I did back end stuff from time to time, most recently wrote a Java command to redact around 17 millions EU profiles for a company, due to GDPR policy requirements.  </p>
          <p>In my free time, I enjoy spending time with my wife, working out, biking on my cross bike, playing computer games and reading books. </p>
        </div>

        <div className='skills'>
          <h1>Skills</h1>
          <div className='skill-item'>
            <h3>Languages</h3>
            <ul>
              <li>Javascript</li>
              <li>Ruby</li>
              <li>Java</li>
              <li>HTML5/CSS3</li>
            </ul>
          </div>

          <div className='skill-item'>
            <h3>Frameworks / Libraries</h3>
            <ul>
              <li>React-Redux</li>
              <li>Rails</li>
              <li>Material-UI</li>
              <li>Node.js</li>
            </ul>
          </div>

          <div className='skill-item'>
            <h3>Database</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>ActiveRecord</li>
            </ul>
          </div>

          <div className='skill-item'>
            <h3>Other</h3>
            <ul>
              <li>Git/Github</li>
              <li>Heroku</li>
              <li>webpack</li>
              <li>AJAX</li>
              <li>RESTful APIs</li>
              <li>JSX</li>
            </ul>
          </div>
        </div>

      </div>)
  }
}

export default About;
