import React from "react";
import "../LoginWindow.css";

class LoginWindow extends React.Component {
  render() {
    return (
      <div>
        <label> Login </label>
        <input type="text" className="loginInput" />
        <label> Hasło </label>
        <input type="text" className="loginInput" />
      </div>
    );
  }
}

export default LoginWindow;
