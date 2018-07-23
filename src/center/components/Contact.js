import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import '../styles/contact.css';



@observer
class Contact extends Component {
  @observable formInput = null;
  
  constructor(props) {
    super(props)
    this.formInput = { formSubmitted: false, name: '', email: '', message: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(event) {
    event.preventDefault()
    console.log('form is submitted')
    this.formInput.formSubmitted = true
    console.log(this.formInput)
    
  }
  handleNameChange = (event) => {
    this.formInput.name = event.target.value
  }
  handleEmailChange = (event) => {
    this.formInput.email = event.target.value
  }
  handleMessageChange = (event) => {
    this.formInput.message = event.target.value
  }
  
  
  render() {
    return (
      <div id='contact' className='contact'>
      <h1>Contact</h1>       
      <div className='body'>
      <form onSubmit={this.handleSubmit}>            
      <input className='form-input' type='text' name='name' placeholder="Name" value={this.formInput.name} onChange={ this.handleNameChange} />
      <input className='form-input' type='text' name='email' placeholder="Email" value={this.formInput.email} onChange={this.handleEmailChange} />
      <textarea className='form-input' type='text' name='message' placeholder="Message" value={this.formInput.message} onChange={ this.handleMessageChange} />
      <input className='form-input' id='submit-button' type='submit' value='Send Message' />
      </form>
      <div className='info'>
      <h3>Daniel Mai</h3>
      <p> Milpitas, California</p>
      <p> danielmai1728@gmail.com</p>
      {/* {this.formInput.formSubmitted && <FormOutput {...this.formInput} />}         */}
      </div>
      </div>
      </div>
    )
  }
}

const FormOutput = (props) => {
  return (
    <div>
    <div>Form Output: </div>
    <p>name: {props.name}</p>
    <p>email: {props.email}</p>
    <p>message: {props.message}</p>
    </div>
    
  )
}

export default Contact
