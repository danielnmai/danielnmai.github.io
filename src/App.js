import React from 'react';
import Header from './header/Header';
import Center from './center/Center';
import Footer from './footer/Footer';
import NavBar from './header/components/NavBar'
// import StickyFooter from './footer/StickyFooter';

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
export default App;
