import React, { Component } from 'react';
import Typing, {Backspace, Delay, Reset } from 'react-typing-animation';
import './styles/typedString.css'

class TypedString extends Component {
  constructor(){
    super()
    this.state = {isFinished: false}
  }
  showDefaultText = () => {
    this.setState({isFinished: true})
  }
  render() {
    let typedString
    if(this.state.isFinished){
      typedString = <span>Full-Stack Developer</span>
    } else {
      typedString = (
        <div>
          <Backspace count={20}/>
          <span>Software Engineer</span>
          <Delay ms={1000} />
          <Backspace count={20} />
          <span>Front End Developer</span>
          <Delay ms={1000} />
          <Backspace count={20}/>
          <span>Full-Stack Developer</span>
        </div>
      )
    }
    return (
      <Typing speed= {100} cursorClassName="cursor" onFinishedTyping={() => this.showDefaultText() } >
        {typedString}
      </Typing>      
    )    
  }
}
export default TypedString;
