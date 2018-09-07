import React, { Component } from 'react';
import Typing, {Backspace, Delay } from 'react-typing-animation';
import './styles/typedString.css'

class TypedString extends Component {
  constructor(){
    super()
    this.state = {isFinished: false}
  }
  isFinishedTyping = () => {
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
      <Typing speed= {100} cursorClassName="cursor" onFinishedTyping={() => this.isFinishedTyping() } >
        {typedString}
      </Typing>      
    )    
  }
}
export default TypedString;
