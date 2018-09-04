import React, {Component} from 'react';
import './styles/typedString.css';

class TypedString extends Component {
  componentDidMount() {
    const TypeIt = require ('typeit')
    const options = {
      strings: [
        'Full-Stack Developer', 'Front End Developer', 'Web Designer'
      ],
      breakLines: false
    }
    new TypeIt(this.el, options)
  }

  render() {
    return (<span ref={(el) => {
        this.el = el
      }}/>)
  }
}

export default TypedString;
