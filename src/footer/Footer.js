import React from 'react';
import s from './styles/footer.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <p>Copyright @ DANIEL MAI - 2018 All Rights Reserved. </p>
    </footer>
  );
};

export default withStyles(s)(Footer)
