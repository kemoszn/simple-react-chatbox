import React, {Component} from 'react'
//import ReactDom from 'react-dom'

class Chat extends Component {
  constructor(props){
    super(props)
  }
  render (){
    return (
      <div>
      <h1 style={{color: "red"}}> chatbox</h1>
      <div className="container">
  <img src="https://pwcenter.org/sites/default/files/default_images/default_profile.png" alt="Avatar"/>
  <p><b>Anon</b>: {this.props.message}</p>
  <span className="time-right">{new Date().toLocaleTimeString()}</span> <br/>
  <img src="https://pwcenter.org/sites/default/files/default_images/default_profile.png" alt="Avatar"/>
  <p><b>Anon</b>: Hello. How are you today?</p>
  <span className="time-right">11:00</span>
       </div>
       <br/><br/>
       </div>
    )
  }
}

export default Chat
