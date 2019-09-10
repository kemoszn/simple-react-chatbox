import React, {Component} from "react"
//import ReactDom from "react-dom"
import Chat from "./chatbox"

class UserInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      input:"",
      submit: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
        input: event.target.value
      });
    }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submit: this.state.input
    }
  )
  }
  render(){
    console.log(this.state.input)
    return (
      <div>
      <Chat message={this.state.submit}/>
      <form onSubmit={this.handleSubmit}>
       <textarea value ={this.state.input} name="message" rows="10" cols="50" onChange={this.handleChange}></textarea>
       <br/>
       <input type="submit" value="Send" />
       <br/> <br/> <br/> <br/> <br/> <br/>
       </form>
       <input type="text" name="message" placeholder="Enter Username (default: anon)"/>
        <input type="submit" value="Enter" />
       </div>
    )
  }
}

export default UserInput
