import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import Chat from "./components/chatbox"
import UserInput from "./components/userinput"

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <UserInput/>
    </div>
  )
  }
}


export default App;
