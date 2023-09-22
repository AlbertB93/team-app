import React from "react";
import "../LoginWindow.css";

class LoginWindow extends React.Component {
  render() {
    function restorePage() {
      window.location.replace("http://wp.pl");
    }

    return (
      <div id="loginWindow">
        <form
          className="login_form"
          method="post"
          name="loginForm" /*  action="../home.html" */
        >
          <label> Login </label>
          <input
            type="text"
            className="loginInput"
            placeholder="Tutaj wpisz login"
            name="login"
          />
          <label> Hasło </label>
          <input
            type="text"
            className="loginInput"
            placeholder="Tutaj wpisz hasło"
            name="password"
          />
          <button type="submit" id="login-btn" onClick={restorePage}>
            {" "}
            Zaloguj{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default LoginWindow;
