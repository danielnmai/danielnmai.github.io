import React from 'react';
import Header from './header/Header';
import Center from './center/Center';
import Footer from './footer/Footer';
import NavBar from './header/components/NavBar'
import s from '../styles/index.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';


class App extends React.Component {
  render() {
    return (
      <div className='site'>
      <div className='header-center'> 
        <NavBar />       
        <Header/>
        <Center/>
      </div>
      <Footer/>
    </div>);
  }
}
export default withStyles(s)(App)
