// styles
import "./index.scss";

// utilities
import fetch from "client/utils/fetch";

export default class App extends React.Component {
  doLogin = async () => {
    const data = await fetch("/auth/v1/login", "POST", {
      email: "email@email.cz",
      password: "tajneheslo"
    });

    if (data.success) {
      window.location = data.payload.redirect;
    }
  };

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <button onClick={this.doLogin}>Login</button>
      </div>
    );
  }
}
