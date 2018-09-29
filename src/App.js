import React from 'react';
import Header from './header/Header';
import Center from './center/Center';
import Footer from './footer/Footer';
import NavBar from './header/components/NavBar'
import s from '../styles/index.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';


class App extends React.Component {
  render() {
    return (
      <div className='site'>
        <NavBar />       
        <Header/>
        <Center/>
        <Footer/>
      </div>
      );
  }
}
export default withStyles(s)(App)
