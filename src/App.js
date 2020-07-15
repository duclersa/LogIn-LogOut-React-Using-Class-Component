import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <NewEvent />
    </div>
  );
} 

class NewEvent extends React.Component {
  constructor() {
    super();
    this.state = { isLoggedIn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    
    this.setState(prevState => {
     
      return {
        isLoggedIn: !prevState.isLoggedIn
      };
    });
  }
  render() {
    return (
      <div>
       
        <h1>You are {this.state.isLoggedIn ? "Logged In" : "Logged Out"}
        </h1>
        <button onClick={this.handleClick}>
          {" "}
          {this.state.isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
    );
  }
}
